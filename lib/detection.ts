import JSZip from 'jszip';

import type { Magic, MimeTypeDefinition, Zipped } from './definitions';
import { bufferCheckSize, hasChoices, mimeDefinitions } from './definitions';


interface MimeDefinitonMatch {
    magic: boolean;
    zipped: boolean;
    pattern: boolean;
    definition: MimeTypeDefinition;
}

export interface MimeDetectionParams {
    /**
     * List of custom MIME type definitions to include in the detection.
     *
     * @default []
     */
    definitions?: MimeTypeDefinition[];
}

export class MimeDetection {

    readonly definitions: MimeTypeDefinition[];

    constructor({
        definitions = [],
    }: MimeDetectionParams = {}) {
        this.definitions = [...mimeDefinitions, ...definitions];
    }

    private decodeBuffer(
        buffer: Uint8Array | ArrayBuffer,
    ): string {
        return new TextDecoder().decode(buffer.slice(0, bufferCheckSize));
    }


    private matchMagic(
        buffer: Uint8Array,
        magic: Magic,
    ): boolean {
        return hasChoices(magic)
            ? magic.some(magicBytes => this.matchMagic(buffer, magicBytes))
            : magic.every((magicByte, index) => magicByte === '*' || buffer[index] === magicByte);
    }

    private async matchZipped(
        buffer: Uint8Array | ArrayBuffer,
        zipped: Zipped,
    ): Promise<boolean> {
        const zip = await JSZip.loadAsync(buffer);
        return zipped.every(key => Boolean(zip.files[key]));
    }

    private matchPattern(
        buffer: Uint8Array | ArrayBuffer,
        pattern: RegExp,
    ): boolean {
        const content = this.decodeBuffer(buffer);
        return pattern.test(content);
    }

    private async matchDefinition(
        buffer: Uint8Array | ArrayBuffer,
        definition: MimeTypeDefinition,
    ): Promise<MimeDefinitonMatch> {
        return {
            magic: definition.magic !== undefined && this.matchMagic(new Uint8Array(buffer), definition.magic),
            zipped: definition.zipped !== undefined && await this.matchZipped(buffer, definition.zipped),
            pattern: definition.pattern !== undefined && this.matchPattern(buffer, definition.pattern),
            definition,
        };
    }


    addDefinitions(definitions: MimeTypeDefinition[]): void {
        this.definitions.push(...definitions);
    }


    async parse(buffer: Uint8Array | ArrayBuffer): Promise<MimeTypeDefinition[]> {
        const matches = (
            await Promise.allSettled(
                this.definitions
                    .map(async definition => this.matchDefinition(buffer, definition)),
            )
        )
            .filter(match => match.status === 'fulfilled')
            .map(({ value }) => value)
            .filter(({ magic, zipped, pattern }) => magic || pattern || zipped);


        if (matches.length === 0) {
            return [];
        }

        // Compare matches based on:
        // 1. Magic match
        // 2. Zipped match
        // 3. Pattern match
        const byPriority = (a: MimeDefinitonMatch, b: MimeDefinitonMatch): number => {
            if (a.magic && !b.magic) {
                return -1;
            }
            if (!a.magic && b.magic) {
                return 1;
            }
            if (a.zipped && !b.zipped) {
                return -1;
            }
            if (!a.zipped && b.zipped) {
                return 1;
            }
            if (a.pattern && !b.pattern) {
                return -1;
            }
            if (!a.pattern && b.pattern) {
                return 1;
            }
            return 0; // If both are equal, maintain original order
        };

        // Sort matches by priority:
        matches.sort(byPriority);

        // keep the first matches that have the same priority
        const end = matches.findIndex(match => byPriority(match, matches[0]) !== 0);
        return matches.slice(0, end === -1 ? undefined : end)
            .map(match => match.definition);
    }
}

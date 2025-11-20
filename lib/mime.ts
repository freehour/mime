/**
 * This module provides the `Mime` class for handling MIME types, including parsing, comparison, and detection.
 *
 * @fileoverview Exports the `Mime` class for handling MIME types.
 */

import { MimeDetection } from './detection';
import { MimeParseError } from './error';
import { uniqueBy } from './utils';


export const MimeSubtype = {
    image: [
        // Image Types
        'jpeg',
        'png',
        'gif',
        'tiff',
        'bmp',
        'x-icon',
        'webp',
        'svg+xml',
    ],
    video: [
        // Video Types
        'mp4',
        'quicktime',
        'x-msvideo',
        'x-matroska',
        'webm',
        'x-flv',
    ],
    audio: [
        // Audio Types
        'mpeg',
        'ogg',
        'wav',
    ],
    application: [
        // Structured Types
        'x-www-form-urlencoded',
        'octet-stream',
        // Compressed Types
        'pdf',
        'zip',
        'x-rar-compressed',
        'gzip',
        'x-7z-compressed',
        'x-tar',
        // Microsoft Office Types
        'vnd.msword',
        'vnd.ms-excel',
        'vnd.ms-powerpoint',
        'vnd.openxmlformats-officedocument.wordprocessingml.document',
        'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'vnd.openxmlformats-officedocument.presentationml.presentation',
        // Code Types
        'x-sh',
        'json',
        'xml',
        'javascript',
        'x-httpd-php',
        'x-yaml',
        'sql',
        'x-powershell',
        'x-bat',
        'x-pem-file',
        'x-latex',
        'rtf',
    ],
    text: [
        // Code Types
        'html',
        'x-ruby',
        'x-python',
        'x-java-source',
        'css',
        'csv',
        'x-go',
        'x-groovy',
        'x-kotlin',
        'x-rust',
        'x-typescript',
        'x-swift',
        'x-perl',
        'x-csrc',
        'x-c++src',
        'x-csharp',
        'x-vb',
        'x-chdr',
        'x-r-source',
        // Text Types
        'markdown',
        'plain',
    ],
    multipart: [
        // Form Data types
        'form-data',
    ],
    font: [
        // Font types
        'woff',
        'woff2',
        'ttf',
        'otf',
    ],
} as const satisfies Record<string, string[]>;

/**
 * Represents a base MIME type.
 * This is the primary category of the MIME type, e.g. `text`, `image`, `audio`, etc.
 * Can be a wildcard `*` to match any type.
 */
export type MimeType = keyof typeof MimeSubtype | '*' | (string & {});

/**
 * Represents a MIME subtype.
 * This is the specific format within the MIME type, e.g. `plain`, `jpeg`, `mp3`, etc.
 * Can be a wildcard `*` to match any subtype.
 * If the type is `*`, the subtype must also be `*`.
 */
export type MimeSubtype<T extends MimeType = MimeType> = T extends keyof typeof MimeSubtype
    ? typeof MimeSubtype[T & keyof typeof MimeSubtype][number] | '*' | (string & {})
    : T extends '*'
        ? '*'
        : '*' | (string & {});


type KnownMimeCode<T extends MimeType = MimeType> = T extends keyof typeof MimeSubtype
    ? `${T}/${typeof MimeSubtype[T & keyof typeof MimeSubtype][number]}`
    : never;

/**
 * Represents a MIME code without parameters.
 * This is the string representation of the MIME `type/subtype`, e.g. `text/plain`, `image/jpeg`, `audio/mp3`, etc.
 * Both type and subtype can be wildcards `*`.
 * If the type is `*`, the subtype must also be `*`.
 */
export type MimeCode<T extends MimeType = MimeType> = T extends keyof typeof MimeSubtype
    ? KnownMimeCode<T>
    : T extends '*'
        ? '*/*'
        : KnownMimeCode | (`${string}/${string}` & {});


/**
 * Represents a MIME type string.
 * This is the string representation of a MIME type, including parameters.
 * The format is `type/subtype; key=value; ...`.
 */
export type MimeString = MimeCode | (string & {});


export interface MimeCompareOptions {
    /**
     * Whether to check parameters in the comparison.
     * If `false`, parameters are ignored in the comparison.
     * @default true
     * @example
     * Mime.parse('text/plain; charset=utf-8').equals(Mime.parse('text/plain'), { checkParameters: false }); // true
     */
    checkParameters?: boolean;
}

export interface MimeParams<Type extends MimeType = MimeType> {
    /**
     * The type of the MIME type is the primary category, e.g. `text`, `image`, `audio`, etc.
     * Can be a wildcard `*` to match any type, forces the subtype to also be `*`.
     */
    type?: Type;

    /**
     * The subtype of the MIME type is the specific format within the type, e.g. `plain`, `jpeg`, `mp3`, etc.
     * Can be a wildcard `*` to match any subtype.
     */
    subtype?: MimeSubtype<Type>;

    /**
     * Additional parameters as key-value pairs, e.g. `charset=utf-8`.
     */
    parameters?: Record<string, string>;
}


/**
 * Represents a MIME type with its type, subtype, and parameters.
 * Provides methods to compare MIME types, check for inclusion, and parse MIME strings.
 */
export class Mime<Type extends MimeType = MimeType> {
    readonly type: Type;
    readonly subtype: MimeSubtype<Type>;
    readonly parameters: Record<string, string>;

    constructor({
        type = '*' as Type,
        subtype = '*' as MimeSubtype<Type>,
        parameters = {},
    }: MimeParams<Type> = {}) {
        this.type = type;
        this.subtype = subtype;
        this.parameters = parameters;
    }

    /**
     * Whether this MIME type has any parameters, e.g. 'charset=utf-8'.
     */
    get hasParameters(): boolean {
        return Object.keys(this.parameters).length > 0;
    }

    /**
     * Checks the equality of two MIME types.
     *
     * @param other The other MIME type to compare against.
     * @returns Whether the two MIME types are equal.
     */
    equals(
        other: Mime,
        { checkParameters = true }: MimeCompareOptions = {},
    ): boolean {
        return this.type === other.type
            && this.subtype === other.subtype
            && (!checkParameters
                || (
                    Object.keys(this.parameters).length === Object.keys(other.parameters).length
                    && Object.entries(this.parameters).every(
                        ([k, v]) => other.parameters[k] === v,
                    )
                )
            );
    }

    /**
     * Checks if this MIME type includes another MIME type.
     * This means that the type and subtype match or are included by wildcards,
     * and all parameters of the other MIME type are included in this MIME type.
     *
     * @param other The other MIME type to check against.
     * @returns Whether this MIME type includes the other MIME type.
     *
     * @example
     * const accepted = Mime.parse('text/*').includes(Mime.parse('text/plain')); // true
     */
    includes(
        other: Mime,
        { checkParameters = true }: MimeCompareOptions = {},
    ): boolean {
        return (this.type === '*' || this.type === other.type)
            && (this.subtype === '*' || this.subtype === other.subtype)
            && (!checkParameters
                || Object.entries(this.parameters).every(
                    ([k, v]) => other.parameters[k] === v,
                )
            );
    }

    /**
     * Returns a string representation of the MIME type.
     * The format is `type/subtype; key=value; ...` for parameters.
     *
     * @returns The string representation of the MIME type.
     * @example
     * const mime = new Mime({ type: 'text', subtype: 'plain', parameters: { charset: 'utf-8' } });
     * mime.toString(); // "text/plain; charset=utf-8"
     */
    toString(): string {
        // MIME pattern string
        const mime = `${this.type}/${this.subtype}`;

        // without parameters
        if (Object.keys(this.parameters).length === 0) {
            return mime;
        }

        // with parameters
        const parts = Object.entries(this.parameters)
            .map(([k, v]) => `${k}=${v}`);
        return `${mime}; ${parts.join('; ')}`;
    }

    /**
     * Detects the MIME type from a buffer data (e.g. file content).
     * Returns a possible list of MIME types that match the content.
     *
     * @param buffer The buffer data to detect the MIME type from.
     * @param detection An optional MIME detection instance to use. If not provided, a new instance will be created.
     *
     * @see {@link MimeDetection}
     */
    static async detect(buffer: Uint8Array | ArrayBuffer, detection = new MimeDetection()): Promise<Mime[]> {
        return detection.parse(buffer).then(
            definitions => uniqueBy(
                definitions.map(definition => new Mime(definition)),
                mime => mime.toString(),
            ),
        );
    }

    /**
     * Lists the considered MIME types for automatic detection from file content.
     *
     * @returns An array of known MIME types.
     */
    static knownTypes(): Mime[] {
        const detection = new MimeDetection();
        return uniqueBy(
            detection.definitions.map(definition => new Mime(definition)),
            mime => mime.toString(),
        );
    }

    /**
     * Parses a MIME type string into a `Mime` object.
     * The string must be in the format `type/subtype; key=value; ...`.
     *
     * @param mime The MIME string to parse.
     * @returns Result with a `Mime` object representing the parsed MIME type or a `ParseError` if the string is invalid.
     * @throws {MimeParseError} If the MIME type string is invalid.
     * @example
     * Mime.parse('text/plain; charset=utf-8'); // Mime { type: 'text', subtype: 'plain', parameters: { charset: 'utf-8' } }
     */
    static parse(mime: MimeString): Mime {
        const TOKEN = /^[A-Za-z0-9!#$&^_.+-]+$/;
        const SUPPORTED_CHARS = '*, A-Z, a-z, 0-9, !, #, $, &, ^, _, ., +, -';

        // split MIME into type/subtype and parameters
        const [mediaTypePart, ...paramParts] = mime.split(';');
        const mediaType = mediaTypePart.trim();

        // Parse type/subtype
        if (!mediaType.includes('/')) {
            throw new MimeParseError('Invalid MIME: missing type/subtype', {
                expression: mime,
                format: 'type/subtype; parameters',
            });
        }
        const [type, subtype] = mediaType.split('/').map(s => s.trim().toLowerCase());

        if (type !== '*' && !TOKEN.test(type)) {
            throw new MimeParseError(`Invalid MIME type: '${type}'`, {
                expression: mime,
                format: `Supported characters: ${SUPPORTED_CHARS}`,
            });
        }
        if (subtype !== '*' && !TOKEN.test(subtype)) {
            throw new MimeParseError(`Invalid MIME subtype: '${subtype}'`, {
                expression: mime,
                format: `Supported characters: ${SUPPORTED_CHARS}`,
            });
        }

        // Parse parameters
        const parameters: Record<string, string> = {};
        for (const param of paramParts) {
            const trimmedParam = param.trim();
            if (trimmedParam.length > 0) {
                if (!trimmedParam.includes('=')) {
                    throw new MimeParseError(`Invalid MIME parameter: '${trimmedParam}'`, {
                        expression: mime,
                        format: 'key=value',
                    });
                }
                const [key, value] = trimmedParam.split('=').map(s => s.trim());

                if (!key || !TOKEN.test(key)) {
                    throw new MimeParseError(`Invalid MIME parameter key: '${key}'`, {
                        expression: mime,
                        format: `Supported characters: ${SUPPORTED_CHARS}`,
                    });
                }

                const unquotedValue = value.startsWith('"') && value.endsWith('"')
                    ? value.slice(1, -1)
                    : value;

                if (unquotedValue.length > 0 && !TOKEN.test(unquotedValue)) {
                    throw new MimeParseError(`Invalid MIME parameter value: '${value}'`, {
                        expression: mime,
                        format: `Supported characters: ${SUPPORTED_CHARS}`,
                    });
                }

                parameters[key.toLowerCase()] = unquotedValue;
            }
        }

        return new Mime({
            type,
            subtype,
            parameters,
        });
    }

    /**
     * Normalizes a MIME type string to a canonical form.
     * This includes parsing the MIME type and returning its string representation.
     *
     * @param mime The MIME string to normalize.
     * @returns The normalized MIME type string.
     * @throws {ParseError} If the MIME type string is invalid.
     * @example
     * Mime.normalize('text / plain;  charset ="utf-8"'); // 'text/plain; charset=utf-8'
     */
    static normalize(mime: MimeString): string {
        return Mime.parse(mime).toString();
    }

    /**
     * Compares a list of source MIME types against a list of target MIME types.
     * Checks if one of the source types includes one of the target MIME types.
     * This can be used for mime support validation.
     *
     * @returns Whether one of the source MIME types includes one of the target MIME types.
     * @example
     * Mime.includes(supportedTypes, ...fileTypes)
     */
    static includes(
        srcTypes: Mime[],
        targetTypes: Mime[],
        options: MimeCompareOptions = {},
    ): boolean {
        return srcTypes.some(
            srcType => targetTypes.some(
                targetType => srcType.includes(targetType, options),
            ),
        );
    }
}

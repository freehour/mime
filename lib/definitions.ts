import type { MimeSubtype, MimeType } from './mime';


export type Zipped = string[];
export type Magic = MagicBytes | MagicBytes[];
export type MagicBytes = (number | '*')[];

export function hasChoices(magic: Magic): magic is MagicBytes[] {
    return magic.length > 0 && Array.isArray(magic[0]);
}

export const bufferCheckSize = 128;

const magic: Record<PropertyKey, Magic> = {
    zip: [
        [0x50, 0x4b, 0x03, 0x04],
        [0x50, 0x4b, 0x05, 0x06],
        [0x50, 0x4b, 0x07, 0x08],
    ],
    office: [0xd0, 0xcf, 0x11, 0xe0],
};


export interface MimeTypeDefinition<Type extends MimeType = MimeType> {
    id?: string;
    type: Type;
    subtype: MimeSubtype<Type>;
    magic?: Magic;
    zipped?: Zipped;
    pattern?: RegExp;
}

export const mimeDefinitions: MimeTypeDefinition[] = [
    // Image Types
    {
        id: 'jpeg',
        type: 'image',
        subtype: 'jpeg',
        magic: [0xff, 0xd8, 0xff],
    },
    {
        id: 'png',
        type: 'image',
        subtype: 'png',
        magic: [0x89, 0x50, 0x4e, 0x47],
    },
    {
        id: 'gif87a',
        type: 'image',
        subtype: 'gif',
        magic: [0x47, 0x49, 0x46, 0x38, 0x37, 0x61], // GIF87a
    },
    {
        id: 'gif89a',
        type: 'image',
        subtype: 'gif',
        magic: [0x47, 0x49, 0x46, 0x38, 0x39, 0x61], // GIF89a
    },
    {
        id: 'tif',
        type: 'image',
        subtype: 'tiff',
        magic: [0x49, 0x49, 0x2a, 0x00], // Little endian
    },
    {
        id: 'tif',
        type: 'image',
        subtype: 'tiff',
        magic: [0x4d, 0x4d, 0x00, 0x2a], // Big endian
    },
    {
        id: 'bitmap',
        type: 'image',
        subtype: 'bmp',
        magic: [0x42, 0x4d],
    },
    {
        id: 'icon',
        type: 'image',
        subtype: 'x-icon',
        magic: [0x00, 0x00, 0x01, 0x00],
    },
    {
        id: 'webp',
        type: 'image',
        subtype: 'webp',
        magic: [
            [0x52, 0x49, 0x46, 0x46, 0x57, 0x45, 0x42, 0x50], // RIFFWEBP
            [0x52, 0x49, 0x46, 0x46, '*', '*', '*', '*', 0x57, 0x45, 0x42, 0x50], // RIFF....WEBP
        ],
    },
    {
        id: 'svg',
        type: 'image',
        subtype: 'svg+xml',
        pattern: /^\s*<\s*svg[^>]*>/i,
    },
    // Video Types
    {
        id: 'mp4',
        type: 'video',
        subtype: 'mp4',
        magic: [0x00, 0x00, 0x00, 0x1c, 0x66, 0x74, 0x79, 0x70],
    },
    {
        id: 'quicktime',
        type: 'video',
        subtype: 'quicktime',
        magic: [0x00, 0x00, 0x00, 0x14, 0x66, 0x74, 0x79, 0x70],
    },
    {
        id: 'avi',
        type: 'video',
        subtype: 'x-msvideo',
        magic: [0x52, 0x49, 0x46, 0x46, 0x41, 0x56, 0x49, 0x20], // RIFFAVI
    },
    {
        id: 'mkv',
        type: 'video',
        subtype: 'x-matroska',
        magic: [0x1a, 0x45, 0xdf, 0xa3],
    },
    {
        id: 'webm',
        type: 'video',
        subtype: 'webm',
        magic: [0x1a, 0x45, 0xdf, 0xa3], // Same as MKV
    },
    {
        id: 'flv',
        type: 'video',
        subtype: 'x-flv',
        magic: [0x46, 0x4c, 0x56, 0x01],
    },
    // Audio Types
    {
        id: 'mp3',
        type: 'audio',
        subtype: 'mpeg',
        magic: [
            [0x49, 0x44, 0x33],
            [0xff, 0xfb],
            [0xff, 0xf3],
            [0xff, 0xf2],
        ],
    },
    {
        id: 'ogg',
        type: 'audio',
        subtype: 'ogg',
        magic: [0x4F, 0x67, 0x67, 0x53], // OggS
    },
    {
        id: 'wav',
        type: 'audio',
        subtype: 'wav',
        magic: [0x52, 0x49, 0x46, 0x46, '*', '*', '*', '*', 0x57, 0x41, 0x56, 0x45],
    },
    // Compressed Types
    {
        id: 'pdf',
        type: 'application',
        subtype: 'pdf',
        magic: [0x25, 0x50, 0x44, 0x46],
    },
    {
        id: 'zip',
        type: 'application',
        subtype: 'zip',
        magic: magic.zip,
    },
    {
        id: 'rar',
        type: 'application',
        subtype: 'x-rar-compressed',
        magic: [0x52, 0x61, 0x72, 0x21],
    },
    {
        id: 'gzip',
        type: 'application',
        subtype: 'gzip',
        magic: [0x1f, 0x8b],
    },
    {
        id: '7z',
        type: 'application',
        subtype: 'x-7z-compressed',
        magic: [0x37, 0x7a, 0xbc, 0xaf],
    },
    {
        id: 'tar',
        type: 'application',
        subtype: 'x-tar',
        // TODO: support magic bytes offset, because TAR files have there magic bytes at 257–262 equal "ustar\0" or "ustar ".
    },
    // Microsoft Office Types
    {
        id: 'word',
        type: 'application',
        subtype: 'vnd.msword',
        magic: magic.office,
    },
    {
        id: 'excel',
        type: 'application',
        subtype: 'vnd.ms-excel',
        magic: magic.office,
    },
    {
        id: 'powerpoint',
        type: 'application',
        subtype: 'vnd.ms-powerpoint',
        magic: magic.office,
    },
    {
        id: 'outlook',
        type: 'application',
        subtype: 'vnd.ms-outlook',
        magic: magic.office,
    },
    {
        id: 'word_openxml',
        type: 'application',
        subtype: 'vnd.openxmlformats-officedocument.wordprocessingml.document',
        magic: magic.zip,
        zipped: ['[Content_Types].xml', 'word/document.xml'],
    },
    {
        id: 'excel_openxml',
        type: 'application',
        subtype: 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        magic: magic.zip,
        zipped: ['[Content_Types].xml', 'xl/workbook.xml'],
    },
    {
        id: 'powerpoint',
        type: 'application',
        subtype: 'vnd.openxmlformats-officedocument.presentationml.presentation',
        magic: magic.zip,
        zipped: ['[Content_Types].xml', 'ppt/presentation.xml'],
    },
    // Code Types
    {
        id: 'shell',
        type: 'application',
        subtype: 'x-sh',
        pattern: /^\s*#!/,
    },
    {
        id: 'json',
        type: 'application',
        subtype: 'json',
        pattern: /^\s*{\s*"name"/,
    },
    {
        id: 'xml',
        type: 'application',
        subtype: 'xml',
        pattern: /^\s*(<?xml)/i,
    },
    {
        id: 'javascript',
        type: 'application',
        subtype: 'javascript',
        pattern: /^\s*(import|const|let|var|function)/i,
    },
    {
        id: 'php',
        type: 'application',
        subtype: 'x-httpd-php',
        pattern: /^\s*<\?php/i,
    },
    {
        id: 'yaml',
        type: 'application',
        subtype: 'x-yaml',
        pattern: /^\s*---\s*$/i,
    },
    {
        id: 'sql',
        type: 'application',
        subtype: 'sql',
        pattern: /^\s*(SELECT|FROM|INSERT\s+INTO|UPDATE|DELETE|CREATE\s+TABLE)/i,
    },
    {
        id: 'powershell',
        type: 'application',
        subtype: 'x-powershell',
        pattern: /^\s*%!/,
    },
    {
        id: 'batch',
        type: 'application',
        subtype: 'x-bat',
        pattern: /^\s*#!/,
    },
    {
        id: 'pem',
        type: 'application',
        subtype: 'x-pem-file',
        pattern: /^\s*(BEGIN|END)/,
    },
    {
        id: 'latex',
        type: 'application',
        subtype: 'x-latex',
        pattern: /^\s*(\\documentclass|\\begin|\\end)/i,
    },
    {
        id: 'rtf',
        type: 'application',
        subtype: 'rtf',
        magic: [0x7B, 0x5C, 0x72, 0x74, 0x66], // ASCII for "{\rtf"
        pattern: /^\{\\rtf/i,
    },
    {
        id: 'html',
        type: 'text',
        subtype: 'html',
        pattern: /^\s*(<!DOCTYPE\s+html|<html)/i,
    },
    {
        id: 'ruby',
        type: 'text',
        subtype: 'x-ruby',
        pattern: /^\s*(class|module|require)/i,
    },
    {
        id: 'python',
        type: 'text',
        subtype: 'x-python',
        pattern: /^\s*(def|class|import)/i,
    },
    {
        id: 'java',
        type: 'text',
        subtype: 'x-java-source',
        pattern: /^\s*(package|import)/i,
    },
    {
        id: 'css',
        type: 'text',
        subtype: 'css',
    },
    {
        id: 'csv',
        type: 'text',
        subtype: 'csv',
        pattern: /^\s*[\w\s]+,[\w\s]+/i,
    },
    {
        id: 'go',
        type: 'text',
        subtype: 'x-go',
        pattern: /^\s*(package|import|func|var|const)/i,
    },
    {
        id: 'groovy',
        type: 'text',
        subtype: 'x-groovy',
        pattern: /^\s*(class|def|if|else|for|while)/i,
    },
    {
        id: 'kotlin',
        type: 'text',
        subtype: 'x-kotlin',
        pattern: /^\s*(fun|val|var|class|import)/i,
    },
    {
        id: 'rust',
        type: 'text',
        subtype: 'x-rust',
        pattern: /^\s*(fn|struct|enum|impl|use)/i,
    },
    {
        id: 'typescript',
        type: 'text',
        subtype: 'x-typescript',
        pattern: /^\s*(interface|type|function|const|let|var|import|export)/i,
    },
    {
        id: 'swift',
        type: 'text',
        subtype: 'x-swift',
        pattern: /^\s*(@|\/\/)/,
    },
    {
        id: 'perl',
        type: 'text',
        subtype: 'x-perl',
        pattern: /^\s*(use|package|my)/i,
    },
    {
        id: 'c',
        type: 'text',
        subtype: 'x-csrc',
        pattern: /^\s*(\/\*|\*\/|\*|#)/,
    },
    {
        id: 'cpp',
        type: 'text',
        subtype: 'x-c++src',
        pattern: /^\s*(\/\/|#)/,
    },
    {
        id: 'csharp',
        type: 'text',
        subtype: 'x-csharp',
        pattern: /^\s*(public|private|class|import)/i,
    },
    {
        id: 'visualbasic',
        type: 'text',
        subtype: 'x-vb',
        pattern: /^\s*(using|namespace|public)/i,
    },
    {
        id: 'configuration',
        type: 'text',
        subtype: 'plain',
        pattern: /^\s*%\w+\s*=/,
    },
    {
        id: 'ini',
        type: 'text',
        subtype: 'plain',
        pattern: /^\s*;\s*module\s*=/,
    },
    {
        id: 'c-header',
        type: 'text',
        subtype: 'x-chdr',
        pattern: /^\s*#\s*(include|define)/i,
    },
    {
        id: 'r',
        type: 'text',
        subtype: 'x-r-source',
        pattern: /^\s*(library|function|if|else|for|while)/i,
    },
    // Text
    {
        id: 'text',
        type: 'text',
        subtype: 'plain',
        pattern: /^[\p{L}\p{N}\p{P}\p{S}\p{Z}\r\n]*$/u,
    },
    {
        id: 'markdown',
        type: 'text',
        subtype: 'markdown',
        pattern: /^\s*(#{1,6}\s+\w+|\*\s+\w+|-\s+\w+|\d+\.\s+\w+|\[.+\]\(http.+)/i,
    },
    // Message Types
    {
        id: 'rfc822',
        type: 'message',
        subtype: 'rfc822',
        pattern: /^\s*From:\s+/i,
    },
];

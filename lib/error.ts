
export interface MimeParseErrorOptions extends ErrorOptions {
    /**
     * The encountered expression that could not be parsed.
     */
    expression?: string;

    /**
     * Additional context about the expected format or structure.
     */
    format?: unknown;
}

/**
 * An error that indicates that an expression could not be parsed as a MIME type.
 */
export class MimeParseError extends Error {

    /**
     * The encountered expression that could not be parsed.
     */
    readonly expression?: string;

    /**
     * Additional context about the expected format or structure.
     */
    readonly format?: unknown;

    constructor(
        message = 'Expression could not be parsed',
        {
            expression,
            format,
            ...options
        }: MimeParseErrorOptions = {},
    ) {
        super(message, options);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.expression = expression;
        this.format = format;
    }
}

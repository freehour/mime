/**
 * Removes duplicate items from an array based on a key function.
 * Extracts a unique hashable key from each item for comparison.
 * @param array The array to filter for unique items.
 * @param keyFn A function that extracts a key from each item.
 */
export function uniqueBy<T, K>(array: readonly T[], keyFn: (item: T) => K): T[];

/**
 * Removes duplicate items from an array based on a custom equality function.
 * @param array The array to filter for unique items.
 * @param isEqual A function that compares two items for equality.
 */
export function uniqueBy<T>(array: readonly T[], isEqual: (a: T, b: T) => boolean): T[];

export function uniqueBy<T>(
    array: readonly T[],
    fn: ((item: T) => unknown) | ((a: T, b: T) => boolean),
): T[] {
    // key function mode (fast path)
    if (fn.length === 1) {
        const keyFn = fn as (item: T) => unknown;
        const seen = new Set<unknown>();
        return array.filter(item => {
            const key = keyFn(item);
            return seen.has(key) ? false : (seen.add(key), true);
        });
    }

    // equality function mode (slow path)
    const isEqual = fn as (a: T, b: T) => boolean;
    return array.reduce<T[]>(
        (acc, item) => acc.some(existing => isEqual(existing, item))
            ? acc
            : [...acc, item],
        [],
    );
}

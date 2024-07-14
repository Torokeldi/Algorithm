/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        return obj
            .filter(Boolean)
            .map(compactObject);
    } else if (typeof obj === 'object' && obj !== null) {
        const compacted = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && Boolean(obj[key])) {
                compacted[key] = compactObject(obj[key]);
            }
        }
        return compacted;
    }
    return obj;
};

/**
 * Example Usage:
 * const obj = { a: null, b: [false, 1, 2, '', 3], c: { d: 0, e: 'Hello' } };
 * console.log(compactObject(obj)); // { b: [1, 2, 3], c: { e: 'Hello' } }
 */

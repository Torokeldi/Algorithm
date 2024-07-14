/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, depth) {
    if (depth === 0) {
        return arr;
    }

    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            acc.push(...flat(val, depth - 1));
        } else {
            acc.push(val);
        }
        return acc;
    }, []);
};

/**
 * Example Usage:
 * console.log(flat([1, [2, [3, [4]], 5]], 1)); // [1, 2, [3, [4]], 5]
 * console.log(flat([1, [2, [3, [4]], 5]], 2)); // [1, 2, 3, [4], 5]
 * console.log(flat([1, [2, [3, [4]], 5]], 3)); // [1, 2, 3, 4, 5]
 */

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if (size <= 0) return [];
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

/**
 * Example Usage:
 * console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
 * console.log(chunk([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
 */


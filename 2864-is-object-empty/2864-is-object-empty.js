/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj).length === 0;
    }
    return true;
};

/**
 * Example Usage:
 * console.log(isEmpty([])); // true
 * console.log(isEmpty([1, 2, 3])); // false
 * console.log(isEmpty({})); // true
 * console.log(isEmpty({ a: 1 })); // false
 */

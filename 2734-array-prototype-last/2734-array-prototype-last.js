/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};

// Example Usage:
const arr = [1, 2, 3];
console.log(arr.last()); // 3
const emptyArr = [];
console.log(emptyArr.last()); // -1


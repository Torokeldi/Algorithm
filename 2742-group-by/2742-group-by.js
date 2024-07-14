/**
 * Groups the elements of the array by the result of applying the function `fn` to each element.
 * @param {Function} fn - The function to apply to each element for grouping.
 * @return {Object} - An object where the keys are the results of `fn` and the values are arrays of elements that have that key.
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        // Apply the function to get the key
        const key = fn(item);
        // Initialize the array if the key doesn't exist in the accumulator
        if (!acc[key]) {
            acc[key] = [];
        }
        // Push the current item into the array for this key
        acc[key].push(item);
        return acc;
    }, {});
};

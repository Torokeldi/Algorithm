/**
 * @param {Array} arr - The array to sort.
 * @param {Function} fn - The function to apply to each element for comparison.
 * @return {Array} - The sorted array.
 */
var sortBy = function(arr, fn) {
    // Create a copy of the array to avoid mutating the original array
    return arr.slice().sort((a, b) => {
        // Apply the function to get the values to compare
        return fn(a) - fn(b);
    });
};
const arr = [5, 1, 3, 2, 4];
const sortByFn = (x) => -x; // Descending order

const sortedArr = sortBy(arr, sortByFn);
console.log(sortedArr); // Output: [5, 4, 3, 2, 1]

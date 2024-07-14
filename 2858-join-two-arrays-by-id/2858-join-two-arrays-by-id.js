/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // Create a dictionary for quick lookups by id
    const dict = {};

    // Add items from arr1 to the dictionary
    arr1.forEach(item => {
        dict[item.id] = { ...item };
    });

    // Update or add items from arr2 to the dictionary
    arr2.forEach(item => {
        if (dict[item.id]) {
            // Merge with existing item
            dict[item.id] = { ...dict[item.id], ...item };
        } else {
            // Add new item
            dict[item.id] = { ...item };
        }
    });

    // Convert dictionary to array and sort by id
    const resultArray = Object.values(dict);
    resultArray.sort((a, b) => a.id - b.id);

    return resultArray;
};

/**
 * Example Usage:
 * const arr1 = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
 * const arr2 = [{ id: 1, age: 30 }, { id: 2, age: 25 }, { id: 3, name: 'Doe', age: 22 }];
 * console.log(join(arr1, arr2)); 
 * // [{ id: 1, name: 'John', age: 30 }, { id: 2, name: 'Jane', age: 25 }, { id: 3, name: 'Doe', age: 22 }]
 */


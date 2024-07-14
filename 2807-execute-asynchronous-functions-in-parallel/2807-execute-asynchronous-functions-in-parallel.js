/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    // Execute all functions to get an array of promises
    const promises = functions.map(fn => fn());
    
    // Use Promise.all to wait for all promises to resolve
    return Promise.all(promises);
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

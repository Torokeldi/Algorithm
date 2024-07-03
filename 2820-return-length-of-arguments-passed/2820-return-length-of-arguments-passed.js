/**
 * Returns the number of arguments passed to the function.
 *
 * @param {...(null|boolean|number|string|Array|Object)} args - The arguments passed to the function.
 * @return {number} The number of arguments.
 */
var argumentsLength = function(...args) {
    return args.length;
};

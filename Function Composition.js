/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // const reduceFunction = (accumulator, func) => func(accumulator)

	return function(x) {
    //     return functions.reduceRight(reduceFunction, x)
    // }
        if (functions.length === 0) {
            return x;
        } else {
            for (let i = functions.length - 1; i >= 0; i--) {
               x = functions[i](x)
            }
            return x;
        }
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
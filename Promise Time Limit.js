/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise(async (resolve, reject) => {
            const id = setTimeout(() => reject("Time Limit Exceeded"), t)
            try {
                const data = await fn(...args)
                resolve(data)
            } catch (error) {
                reject(error)
            }
            // fn(...args)
            //     .then((res) => resolve(res))
            //     .catch((error) => console.log(error))
            //     .finally(() => clearTimeout(id))
        })
    }
};

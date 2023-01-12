/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solution 1 - using Maps
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	//check lengths
	if (s.length !== t.length) return false;
	//create 2 maps
	const mapS = new Map();
	const mapT = new Map();

	for (let i = 0; i < s.length; i++) {
		//add to s map
		if (mapS.has(s[i])) { //n(n)
			let prevValuePlusOne = mapS.get(s[i]) + 1; //n(n)
			mapS.set(s[i], prevValuePlusOne); //n(1)
		} else {
			mapS.set(s[i], 1); //n(1)
		}
		//add to t map
		if (mapT.has(t[i])) { //n(n)
			let prevValuePlusOne = mapT.get(t[i]) + 1; //n(n)
			mapT.set(t[i], prevValuePlusOne); //n(1)
		} else {
			mapT.set(t[i], 1); //n(1)
		}
	}
	for (let i = 0; i < s.length; i++) {
		//check for equality of values for each key
		if (mapS.get(s[i]) !== mapT.get(s[i])) return false;
	}
	return true;
};


// Solution 2 - using a JS object
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const charToCountMap = {}
    for (let i = 0; i < s.length; i++) {
        if (!charToCountMap[s[i]]) charToCountMap[s[i]] = 0
        if (!charToCountMap[t[i]]) charToCountMap[t[i]] = 0
        charToCountMap[s[i]]++
        charToCountMap[t[i]]--
    }
    for (let individualChars in charToCountMap) {
        if (charToCountMap[individualChars] !== 0) return false
    }
    return true
};

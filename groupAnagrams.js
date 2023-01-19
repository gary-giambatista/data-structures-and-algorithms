/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(unsortedStringArray) {
	// use a loop to iterate through strings and add to a map using a key of the string sorted
	//1. sort the strings in the array
    // check ifs: does sorted array exist in map, set accordingly
	//3. retreive the values from the map and add them to a single array
	//4. return that array
    const map = new Map(); // initialize a map for checking string occurences
    for (let unsortedString of unsortedStringArray) { // loop through VALUES of the unsortedStringArray
        let sortedString = unsortedString.split("").sort().join("") // sort each string

        const valueIsInMap = map.get(sortedString)
        if (valueIsInMap) {
            map.set(sortedString, valueIsInMap.concat(unsortedString)) //use concat to add string to map value array
        } else map.set(sortedString, [unsortedString]) // add unsorted as an ARRAY to group anagrams together
    }
    let answerArray = []; // create answer array
    for (let key of map.keys()) { // use keys() to loop through the VALUE of the maps keys
        answerArray.push(map.get(key)) // use the key value to get the values and push them to the answer array
    }
    return answerArray // return answer array
};

/*Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

  const keys1 = ["abc", 3, "yo"];
  const vals1 = [42, "wassup", true];
  const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
  };

  const keys2 = ["abc", 3, "yo", 'something'];
  const vals2 = [42, "wassup", true];
  const expected2 = {
    abc: 42,
    3: "wassup",
    yo: true,
    something: null
  };

  const keys3 = ["abc", 3, "yo"];
  const vals3 = [42, "wassup", true, 'something'];
  const expected3 = false
  
  /**
   * Converts the given arrays of keys and values into an object.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<string>} keys
   * @param {Array<any>} values
   * @returns {Object} The object with the given keys and values.
   */
  var obj = {}
  
  function zipArraysIntoMap(keys, values) {
      for (var i = 0; i < Array.length; i++){
          obj[i] = "keys[i]: values[i]"; 
          obj.push(i)
          return obj
      }
  }

zipArraysIntoMap(keys1, vals1)


/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const two_obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const two_expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

const two_obj2 = { name: "Zaphod", charm: "high", morals: "" };
const two_expected2 = false

const two_obj3 = { name: "Zaphod", charm: "high", morals: "dicey", something: 'dicey' };
const two_expected3 = { Zaphod: "name", high: "charm", dicey: ["morals", 'something'] };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, string>} obj An object with string keys and string values.
 * @return The given object with key value pairs inverted.
 */
 function invertObj(obj) {
  let newObj = {}

  for (const key in obj) {
    let val = obj[key]

    if (!val && val !== 0){
      return false
    }
    if (newObj[val] === undefined){
      newObj[val] = key
    } else if (typeof newObj[val] === 'string') {
      let temp = newObj[val]
      let arr = [temp, key]
      newObj[val] = arr
    } else {
      newObj[val].push(key)
    }
  }
  
  return newObj
}
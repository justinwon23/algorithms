/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
 function isAnagram(s1,s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    if (s1.length != s2.length) {
        return false;
    } else {
        let s1_arr = [];
        for (let i = 0; i < s1.length;i++) {
            s1_arr.push(s1[i]);
        }
        for (let j = 0; j < s2.length; j++) {
            let no_char = false;
            for (let k = 0; k < s1_arr.length; k++){
                if (s1_arr[k] === s2[j]) {
                    let temp = s1_arr[k];
                    s1_arr[k] = s1_arr[s1_arr.length-1];
                    s1_arr[s1_arr.length-1] = temp;
                    s1_arr.pop();
                    no_char = false;
                    break;
                } else {
                    no_char = true;
                }
            }
            if (no_char === true) {
                console.log("Not present in main string.")
                return false;
            }
        }
        return true;
    }
}

// ***********************************************************************
/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {}

module.exports = { trim };
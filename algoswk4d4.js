/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {}


function rotate(str,num){
    num = num % str.length
    len = str.length   
    str += str   
    return str.slice(len-num,str.length-num)
}


/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// STR1 = ABCD
// STR2 = CDAB -> BCDA -> ABCD
const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
// STR1 = ABCD
// STR2 = CDBA -> ACDB -> BACD -> DBAC -> CDBA
const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {}

function isRotation(s1, s2) {
    let new_str = s1.concat(s1);
    if (new_str.includes(s2)) {
        return true;
    } else {
        return false;
    }
}
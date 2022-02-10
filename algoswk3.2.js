/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";


function acroynym(text){
    var x = "";
    var y = false;
    if(str[0] === true){
        x += str[0];
    }
    for(i = 0; i <str.length, i++){
        if(y == true){
            x += str[i];
            y = false
        }
        if(str[i] = = " "){
            y= true;
        }
    }
    return.x.toUpperCase();

}
/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The given str converted into an acronym.
 * 
 * Pseudo Code
 * - create a function that takes in a string
 * - create a variable to hold on to the acronym
 * - if first character of given string is not a space
 *      - grab the first character of the given string and add that to the acronym 
 * - iterate through the string
 * - if character before the current character is a blank space
 *      - put the current character into the variable that holds onto the acronyms
 * - capitalize all the characters inside the holder acronym variable
 * - return the variable
 */
function acronymize(str) {}

// **************************************************************

/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const two_str1 = "creature";
const two_expected1 = "erutaerc";

const two_str2 = "dog";
const two_expected2 = "god";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
    var o = "";
    for(i = 0; i < str.length; i++){
        o += str[str.length -1 -i];
    }
    return o
]

var n =reverseString(two_str1);
console.log(n);

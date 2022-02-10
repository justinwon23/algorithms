/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcdddaa";
  const expected1 = "a4b2c1d3a2";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";
  
  const str4 = "bbcc";
  const expected4 = "bbcc";

  function encodeStr(str){
    let result = ""
    let count = 1
    let flag = true
    result += str[0]
    for (let i = 1; i < str.length;i++){
        if (str[i] == str[i-1]){
            count ++
            if (count >= 3){
                flag = false
            }
        }
        else {
            result += count
            count = 1
            result += str[i]
        }

    }

    if (flag){
        return str
    }

    if(count > 1){
        result += count
    }

    return result
}
  
  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs only if the
   * character occurs more than two time.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   * 
   */
  function encodeStr(str) {}

//   *******************************************************************

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {}

function decodeStr(str) {
    let result =""
    let temp = ""
    for (let i = 0; i < str.length;i++){
        
        if(isAlpha(str[i]) && temp == ""){
            result += str[i]
        }
        else if(isAlpha(str[i])){
            result = result + (result[result.length-1].repeat(parseInt(temp)-1))
            result += str[i]
            temp = ""
        }
        else{
            temp += str[i].toString()
        }
    }

    result = result + (result[result.length-1].repeat(parseInt(temp)-1))
    return result
}


function isAlpha(str){
    if (str>="a" && str <="z"){
        return true
    }
    else{
        return false
    }
}


const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

console.log(decodeStr(str2))
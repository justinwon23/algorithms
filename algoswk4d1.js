/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;


function nonMatchingPair(arr){
    if(arr.length==1){
        return arr[0];
    }
    var curr=0;
    for(var i=0;i<arr.length-1;i++){
        
        curr=arr[i];
        if(curr!=-1){
            currVal=1;
            for(var j=i+1; j<arr.length; j++){
                if(curr==arr[j]){
                    currVal++;
                    arr[j]=-1;
                }
            }
            if(currVal%2!=0){
                return curr;
            }
        }
    }
    return 0;
}
console.log(nonMatchingPair(nums1));
console.log(nonMatchingPair(nums2));
console.log(nonMatchingPair(nums3));
console.log(nonMatchingPair(nums4));






/***
You want to check the first index. then see if character at index [i] == any other chars in the forloop.
then count +1 for
***


******************************************************

/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

// const two_arr1 = ["a", "a", "a"];
// const two_expected1 = {
//   a: 3,
// };

// const two_arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const two_expected2 = {
//   a: 2,
//   b: 1,
//   c: 3,
//   B: 1,
//   d: 1,
// };

// const two_arr3 = [];
// const two_expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */

 function frequencyTableBuilder(arr) {
    //hash table
    const hashMap=new Map();
    if(arr.length==0){
        return hashMap;
    }
    for(var i=0;i<arr.length;i++){
        if(hashMap.has(arr[i])){
            var keyVal=hashMap.get(arr[i]);
            hashMap.set(arr[i], ++keyVal);
        }else{
            hashMap.set(arr[i],1);
        }
    }
    return hashMap;

}

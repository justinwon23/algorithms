// https://leetcode.com/problems/two-sum/

// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have EXACTLY ONE SOLUTION,
// and you may not use the same element twice.

// the array is unsorted, contains no floats, and there may be duplicate values

// Given arr = [2, 11, 7, 15], target = 9,
// Because arr[0] + arr[2] = 2 + 7 = 9
// return [0, 2].

// example 1
// given: [2, 11, 7, 15]
// target: 9
// output: [0,2]

// example 2
// given: [3,2,4]
// target: 6
// output: [1,2]

// example 3
// given: [3,3]
// target: 6
// output: [0,1]
 
function twoSums(arr, target) {
    returnArr = []
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target){
                returnArr.push(i, j)
            }
        }
    }
    return returnArr
}

// function twoSums(arr, target) {
//     a = 0;
//     b = 1;
//     returnArr=[]
//     while (b < arr.length - 1 && a < arr.length - 2 ){
//         if (arr[a] + arr[b] === target){
//             returnArr.push(a, b)
//             break
//         }
//         else {
//             b++
            
//         }
//         if (b === arr.length - 1){
//             a++
//         }
//     }
//     return returnArr
// }






// console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
// console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]
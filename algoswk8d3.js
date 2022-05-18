// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

function findConsecutiveSums(arr, k) { 
// sumArr = []
// sum = 0
//     for (let i =0;i < arr.length; i++){
//         let b = [i + 1]
//         while (sum === k || sum < k){
//             if (arr[i] === k){
//                 sumArr.push(arr[i])
//             }
//             else if (arr[i] + arr[b] === k ){
//                 sumArr.push(arr[i],arr[b])
//             }
//             else if (arr[i] + arr[b] < k){
//                 b++
//             }
//             else if(arr[i] + arr[b] >  )

//         }
//     }
// }

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));
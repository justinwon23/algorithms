/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
 function orderedIntersection(sortedA, sortedB) {
    const returnArr = []; 
    for(let i=0;i<sortedA.length;i++){
         for(let j=0;j<sortedB.length;j++){
            if(sortedA[i] == sortedB[j]){
                if(!returnArr.includes(sortedA[i])){
                    returnArr.push(sortedA[i])
                }
            }
         }
     }
     return returnArr;
 }

//  function orderedIntersection(sortedA, sortedB) {
//     let result = [];
//     let i = 0;
//     let j = 0;

//     while (i < sortedA.length && j < sortedB.length) {
//         while(sortedA[i] === sortedA[i+1]) {
//             i++;
//         }
//         while(sortedB[j] === sortedB[j+1]){
//             j++;
//         }
//         if(sortedA[i] < sortedB[j]) {
//             i++;
//         } else if(sortedA[i] > sortedB[j]) {
//             j++;
//         } else {
//             result.push(sortedA[i]);
//             i++;
//             j++
//         }
//     }
//     return result;
// }

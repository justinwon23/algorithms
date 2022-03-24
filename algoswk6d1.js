/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 * 
 * edge case
 * base case -> the ending case where it starts working its way back up to the top
 * recursion call
 */
// function sumArr(nums) {
//     let sum = 0
//     for (let i =0; i<nums.length; i++){
//         sum += nums[i]
//     }
//     return sum
// }

function sumArr(nums) {
    // edge case
    // base case 
    if (nums.length == 0){
        return 0
    }
    // recursion call
    return nums[i] + sumArr(nums, i++)
}

console.log(sumArr(nums1));

// **************************************************************

/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const two_num1 = 5;
const two_expected1 = 15;
// Explanation: (1+2+3+4+5)

const two_num2 = 2.5;
const two_expected2 = 3;
// Explanation: (1+2)

const two_num3 = -1;
const two_expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
 function recursiveSigma(num) {
    if (num <= 0){
        return 0
    }
    return Math.floor(num) + recursiveSigma(num -1)

}
console.log(recursiveSigma(two_num3));
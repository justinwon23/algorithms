/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [9, 1, 4, 0, 0, 1, 1, 1, 1, 10]
const expected3 = 3
// const expected3 = 4

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
 function balanceIndex(nums) {
    if (nums.length < 3) {
      return -1;
    }
  
    let left = nums[0];
    let right = 0;
  
    for (let i = 2; i < nums.length; i++) {
      right += nums[i];
    }
  
    for (let i = 1; i < nums.length - 1; i++) {
      if (left === right) {
        return i;
      }
  
      right -= nums[i + 1];
      left += nums[i];
    }
    return -1;
  }


// ***************************************************

/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visited indexes).
*/

const two_queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const two_expected1 = false;

const two_queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const two_expected2 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
 function theNoFunEnforcer(queue) {
    let distance = 0;
    let firstPersonSeen = false;
  
    // Use the existing i value
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] === 0) {
        distance += 1;
      } else {
        if (firstPersonSeen && distance < 6) {
          return false;
        }
  
        firstPersonSeen = true;
        distance = 0;
      }
    }
    return true;
  }
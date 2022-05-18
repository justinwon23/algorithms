// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

// MergeSort(arr[], l,  r)
// If r > l
//      1. Find the middle point to divide the array into two halves:
//              middle m = (l+r)/2
//      2. Call mergeSort for first half:
//              Call mergeSort(arr, l, m)
//      3. Call mergeSort for second half:
//              Call mergeSort(arr, m+1, r)
//      4. Merge the two halves sorted in step 2 and 3:
//              Call mergeSortedArrays(arr1, arr2)

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.
function mergeSort(arr) { }



// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
// test mergeSortedArrays(arr1, arr2) by passing test cases
var mergeArr2 = [55,66];
var mergeArr1 = [33,44];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];


var arrLeft = [22];
var arrRight = [11,33];
//                      arrLeft, arrRight
// function mergeSortedArrays(arr1, arr2) { 
//     let result = []
//     if (arr1.length> arr2.length){
//         let bigArr = arr1
//         let smallArr = arr2
//     }
//     else
//         bigArr = arr2
//         smallArr = arr1
//     for (let i = 0; i < bigArr.length; i++ ){
//         for(let j = 0; j <smallArr.length; i++){
//             if (bigArr[i] < smallArr[j]){
//                 result.push(bigArr[j])
//             }
//             else
//             result.push(smallArr[j])
//         }
//     }

// }

function mergeSortedArrays(arr1, arr2, newArr) { 
    if (newArr === undefined ){
        newArr = []
    } 
    if (newArr.length === arr1.length + arr2.length){
        return newArr
    }

    
    if (arr1[0] < arr2[0]){
        newArr.push(arr1[0])
        arr1.slice(1)
        // console.log(arr1)
    }
    else 
        newArr.push(arr2[0])
        arr2.slice(1)
        // console.log(arr2)
    return mergeSortedArrays(arr1,arr2, newArr)
}

console.log(mergeSortedArrays(mergeArrA, mergeArrB))

// //steps:
//     1. create a merge function to merge two already sorted arrays into a single sorted array
//       - you do NOT need to work in place, ok to use a new array
//     2. create merge sort function to sort the provided array
//       - split the array into half and recursively merge the halves (run mergeSort on those 2 halves)
//       - splitting of arrays stops when array can no longer be split
//       - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array



//   useful methods
//   - var x = arr1.concat(array2, array3)
//     - combines array arg(s) with the array that concat is called on
//     - returns new arr w/o mutating originals


//   - arr.slice([begin[, end]])
//     - returns a COPY of the specified portion of the array
//     - end is exclusive
//       - if omitted, slices from provided 'begin' to end of array

// var arr = [88, 22, 44, 12, 99, 111, 9, 15, 49]
// var m = Math.floor(arr.length / 2)
// var l = arr.slice(0, m);
// var r = arr.slice(m, arr.length);
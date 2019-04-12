/**
 * Most common Algorithms examples developed in Javascript
 */

const array = [1,3,7,8,9,10,13,54,87,98,100]
const x = 98

/**
 * Binary search algorithm
 *
 * @return
 *  Returns the a boolean value if the element is found in the array
 */
function binarySearch(arr, x) {
    return binarySearchRecursive(arr, x, 0, array.length -1, )
}

/**
 * Recursive implementation of the binary search algorithm
 *
 * @return
 *  Returns the a boolean value if the element is found in the array
 */
function binarySearchRecursive(arr, x, left, right) {

    // No more values to compare x is not in array
    if (left > right)
        return false

    // Get midpoint of array
    const mid = Math.floor(left + ((right - left) / 2))

    if (arr[mid] === x) { // X has been found in array
        return true
    } else if (x < arr[mid]) { // Search on the left side of the array  
        return binarySearchRecursive(arr, x, left, mid -1)
    } else { // Search on the right side of the array  
        return binarySearchRecursive(arr, x, mid + 1, right)
    }
}

console.log(`Binary Search (Recursive implementation)`)
console.log(`Searching x: ${x} in array: ${array}`)

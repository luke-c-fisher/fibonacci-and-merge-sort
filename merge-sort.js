

const mergeSort = (n) => {

    if (n.length < 2) {
        return n
    } else {
        const half = Math.ceil(n.length / 2)
        let leftHalf = n.slice(0, half)
        let rightHalf = n.slice(half, n.length)

        let l = mergeSort(leftHalf)
        let r = mergeSort(rightHalf)

        let result = merge(l, r)
        return result
    }

}

const merge = (left, right) => {

    let result = []

    // create two local variables that model the split of the original array

    // write the indicies for the original array, left array, and right array, respectively
    let i = 0, j = 0

    // With this while loop, we are able to use i and j to iterate through the split halves
    // of the original array until they've both reached the end length, comparing the values at 
    // i and j simultaneously, ensuring that the result array contains the sorted value in either the 
    // left or right array. 

    // This demonstrates the comparison aspect of mergeSorts 'divide and conquer'
    // algorithm.
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
    }

    // These two conditions ensure that the remaining elements in either array are pushed onto the results array.
    while (i < left.length) result.push(left[i++])
    while (j < right.length) result.push(right[j++])

    return result
}



module.exports = {
    mergeSort
};
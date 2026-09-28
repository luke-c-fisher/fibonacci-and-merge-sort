const { mergeSort } = require('./merge-sort')

describe('Merge sort', () => {

    test('Returns the base case of merge sort', () => {
        expect(mergeSort([72])).toEqual([72])
    })

    test('Uses the merge sort algorithm to properly sort an array', () => {
        expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
    })
})
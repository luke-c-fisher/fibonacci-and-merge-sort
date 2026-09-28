const { fibs, fibsRec } = require('./fibonacci');


describe('Fibonacci', () => {
    test('Gets a number and returns its iterative fibonacci sequence', () => {
        expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test('Gets a number and returns its fibonacci sequence recursively', () => {
        expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test('Gets a large number and returns its fibonacci sequence recursively', () => {
        expect(fibsRec(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
    })
});

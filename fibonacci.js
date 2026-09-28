
// 09/22——In each case below, we are returning an array that models the fibonacci sequence up to the value of a given input. 

// In the iterative case, we loop over the actual input, n, and add the fibonacci numbers for that input by building on an array
// that features the base case, [0, 1]. From here, we start at the second index, i = 2, to start pushing elements to the fibonacci sequence
// by taking the value of the most recent fibonacci number (seq[i - 1]) and adding it to the number before it (seq[i - 2]). From the base case
// up to the input, we would get (seq[2 - 2] + seq[2 - 1]), which can only be 1 because seq[1] is one and seq[0] is zero, giving us [0, 1, 1].
// Since this function operates on an index basis, we simply build up to the values to n.

// In the recursive case, we likewise use the base case of [0, 1], except we use recursion to build up the array instead. To do this, we
// assign an endogenous variable, seq, that captures each value in n - 1 (e.g., fibsRec(5) => 4, 3, 2, 1) until it reaches the base case, 
// [0, 1], in which instance it starts the fibonacci sequence by applying the same logic used in the iterative case, by using the current
// index of seq added to its index before that, compiling an array that consists of each fibonacci number up to n.


const fibs = function(n) {

    let seq = [0, 1]

    for (let i = 2; i <= n - 1; i++) {
        seq.push(
            seq[i - 2] + seq[i - 1]
        )
    }
    return seq
}

const fibsRec = function(n) {

    if ( n <= 2 ) {
        return [0, 1]
    } else {
        let seq = fibsRec(n - 1)
        seq.push(seq[seq.length - 1] + seq[seq.length - 2])
        return seq
    }

}


module.exports = {
    fibs,
    fibsRec
};

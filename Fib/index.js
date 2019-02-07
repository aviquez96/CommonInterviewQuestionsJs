// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// SOLUTION 1
// function fib(n) {
//     let fibNum = 0;
//     let previousNum1 = 0;
//     let previousNum2 = 1;
    
//     for (let i = 0; i < n; i++) {
//         fibNum = previousNum1 + previousNum2;
//         previousNum2 = previousNum1;
//         previousNum1 = fibNum;
//     }

//     return fibNum

// }

// SOLUTION 2 (recursion)
function slowFib(n) {
    // base case
    if (n <2) {
        return n;
    }

    return fib(n-1) + fib(n-2);  

}

function memoize (fn) {
    let cache = {};
    return function(...args) {
        //Have we ever called this function with these set of arguments? If so, return it!
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        
        return result;
    }
}

const fib = memoize(slowFib);

module.exports = fib;

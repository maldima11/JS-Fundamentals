// 10. Factorial

// Write a script that computes and prints a factorial

// The first argument is integer (argument can be cast as integer) used for computing the factorial
// Factorial of NaN is 1
// You must do it recursively
// You must use a function
// You must use console.log(...) to print all output
// You are not allowed to use var

// solution

// Recursive function to calculate factorial
function factorial(n) {
    if (isNaN(n) || n <= 1) {
    return 1;
    }
  return n * factorial(n - 1);
}

// Get command line arguments (excluding node and script name)
const args = process.argv.slice(2);

// Convert argument to integer
const num = parseInt(args[0]);

// Calculate and print the factorial
const result = factorial(num);
console.log(result);
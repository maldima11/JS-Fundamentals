// 9. Add

// Write a script that prints the addition of 2 integers

// The first argument is the first integer
// The second argument is the second integer
// You have to define a function with this prototype: function add(a, b)
// You must use console.log(...) to print all output
// You are not allowed to use var

// solution
// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Get command line arguments (excluding node and script name)
const args = process.argv.slice(2);

// Convert arguments to integers
const firstNum = parseInt(args[0]);
const secondNum = parseInt(args[1]);

// Calculate and print the result
const result = add(firstNum, secondNum);
console.log(result);
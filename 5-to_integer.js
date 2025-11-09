// 5. An Integer

// Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:

// If the argument can’t be converted to an integer, print “Not a number”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You are not allowed to use try/catch

// solution

// Get command line arguments (excluding node and script name)
const args = process.argv.slice(2);

// Get the first argument
const firstArgument = args[0];

// Convert to integer
const num = parseInt(firstArgument);

// Check if conversion was successful
if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${num}`);
}
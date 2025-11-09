// 4. Create a sentence

// Write a script that prints two arguments passed to it, in the following format: “ is ”

// You must use console.log(...) to print all output
// You are not allowed to use var

// solution
// Get command line arguments (excluding node and script name)
const args = process.argv.slice(2);

// Get the first two arguments
const firstArgument = args[0];
const secondArgument = args[1];

console.log(`${firstArgument} is ${secondArgument}`);
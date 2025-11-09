// 3. Value of my argument

// Write a script that prints the first argument passed to it:

// If no arguments are passed to the script, print “No argument”
// You must use console.log(...) to print all output
// You are not allowed to use var
// You are not allowed to use length

// solution

// Get command line arguments (excluding node and script name)
const args = process.argv.slice(2);

// Get the first argument
const firstArgument = args[0];

if (firstArgument === undefined) {
    console.log("No argument");
} else {
    console.log(firstArgument);
}
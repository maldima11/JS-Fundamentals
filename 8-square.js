// 8. Square

// Write a script that prints a square

// The first argument is the size of the square
// If the first argument can’t be converted to an integer, print “Missing size”
// You must use the character X to print the square
// You must use console.log(...) to print all output
// You are not allowed to use var
// You must use a loop (while, for, etc.)

// solution
// Get command line arguments (excluding node and script name)
const args = process.argv.slice(2);

// Convert first argument to integer
const size = parseInt(args[0]);

// Check if conversion was successful
if (isNaN(size)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
        row += "X";
    }
    console.log(row);
    }
}
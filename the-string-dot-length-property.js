/*

Objective:
Practice using the .length property by calculating the length of
multiple predefined strings and assigning the results to specific variables.

Instructions:
You will be provided with several predefined string variables.
Your task is to:
  - Use the .length property to calculate the length of each string.
  - Assign the length of each string to its corresponding length variable.
  - Ensure that each length variable contains the correct value.

*/

// Starter Code (Pre-filled):
// Predefined strings
let stringOne = "Coding Bootcamp";
let stringTwo = "JavaScript";
let stringThree = "";

// Your task: Assign the length of each string to the corresponding variable
let lengthOne;   // Length of stringOne
let lengthTwo;   // Length of stringTwo
let lengthThree; // Length of stringThree

// Your code here

const string1 = "Hello World";
const string2 = "JavaScript";
const string3 = "Launch Code";
const string4 = "Programming is fun!";
const string5 = "";
const string6 = "a";
const string7 = "The quick brown fox jumps over the lazy dog";
const string8 = "   spaces   ";
const string9 = "12345";
const string10 = "Special characters: !@#$%^&*()";

// Step 1: Use the length property to calculate the length of each string
// Step 2: Assign the length to corresponding length variables
// Step 3: Ensure each length variable contains the correct value

console.log("=== String Length Practice ===\n");

// Calculate and assign lengths
const string1Length = string1.length;
const string2Length = string2.length;
const string3Length = string3.length;
const string4Length = string4.length;
const string5Length = string5.length;
const string6Length = string6.length;
const string7Length = string7.length;
const string8Length = string8.length;
const string9Length = string9.length;
const string10Length = string10.length;

// Display results with verification
console.log(`String 1: "${string1}"`);
console.log(`Length: ${string1Length}`);
console.log(`Verification: ${string1.length === string1Length ? '✓ Correct' : '✗ Incorrect'}\n`);

console.log(`String 2: "${string2}"`);
console.log(`Length: ${string2Length}`);
console.log(`Verification: ${string2.length === string2Length ? '✓ Correct' : '✗ Incorrect'}\n`);

console.log(`String 3: "${string3}"`);
console.log(`Length: ${string3Length}`);
console.log(`Verification: ${string3.length === string3Length ? '✓ Correct' : '✗ Incorrect'}\n`);

console.log(`String 4: "${string4}"`);
console.log(`Length: ${string4Length}`);
console.log(`Verification: ${string4.length === string4Length ? '✓ Correct' : '✗ Incorrect'}\n`);

console.log(`String 5: "${string5}" (empty string)`);
console.log(`Length: ${string5Length}`);
console.log(`Verification: ${string5.length === string5Length ? '✓ Correct' : '✗ Incorrect'}\n`);

console.log(`String 6: "${string6}"`);
console.log(`Length: ${string6Length}`);
console.log(`Verification: ${string6.length === string6Length ? '✓ Correct' : '✗ Incorrect'}\n`);

console.log(`String 7: "${string7}"`);
console.log(`Length: ${string7Length}`);
console.log(`Verification: ${string7.length === string7Length ? '✓ Correct' : '✗ Incorrect'}\n`);

console.log(`String 8: "${string8}" (includes spaces)`);
console.log(`Length: ${string8Length}`);
console.log(`Verification: ${string8.length === string8Length ? '✓ Correct' : '✗ Incorrect'}\n`);

console.log(`String 9: "${string9}"`);
console.log(`Length: ${string9Length}`);
console.log(`Verification: ${string9.length === string9Length ? '✓ Correct' : '✗ Incorrect'}\n`);

console.log(`String 10: "${string10}"`);
console.log(`Length: ${string10Length}`);
console.log(`Verification: ${string10.length === string10Length ? '✓ Correct' : '✗ Incorrect'}\n`);

// Summary section
console.log("=== Summary ===");
console.log(`Total strings processed: 10`);
console.log(`Longest string: "${string7}" (${string7Length} characters)`);
console.log(`Shortest non-empty string: "${string6}" (${string6Length} character)`);
console.log(`Empty string length: ${string5Length}`);

// Additional demonstrations
console.log("\n=== Additional Length Property Examples ===");
console.log("Demonstrating that .length counts all characters including spaces:");
console.log(`"abc def".length = ${"abc def".length}`);
console.log(`"   ".length = ${"   ".length} (three spaces)`);
console.log(`"\\n\\t".length = ${"\n\t".length} (newline and tab characters)`);

// Test all length variables are correctly assigned
console.log("\n=== Verification Test ===");
const allCorrect = [
    string1.length === string1Length,
    string2.length === string2Length,
    string3.length === string3Length,
    string4.length === string4Length,
    string5.length === string5Length,
    string6.length === string6Length,
    string7.length === string7Length,
    string8.length === string8Length,
    string9.length === string9Length,
    string10.length === string10Length
].every(test => test === true);

console.log(`All length variables correctly assigned: ${allCorrect ? '✓ YES' : '✗ NO'}`);

// Export for testing (if using modules)
module.exports = {
    string1, string1Length,
    string2, string2Length,
    string3, string3Length,
    string4, string4Length,
    string5, string5Length,
    string6, string6Length,
    string7, string7Length,
    string8, string8Length,
    string9, string9Length,
    string10, string10Length
};


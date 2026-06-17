#!/usr/bin/env node

/**
 * calculator.js — Node.js CLI Calculator
 *
 * Supported operations (matching the four arithmetic keys on the calculator):
 *   add      (+)  — Addition:       returns the sum of two numbers
 *   subtract (-)  — Subtraction:    returns the difference of two numbers
 *   multiply (x)  — Multiplication: returns the product of two numbers
 *   divide   (÷)  — Division:       returns the quotient of two numbers
 *
 * Usage:
 *   node src/calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node src/calculator.js add 5 3        → 8
 *   node src/calculator.js subtract 9 4  → 5
 *   node src/calculator.js multiply 3 7  → 21
 *   node src/calculator.js divide 10 2   → 5
 */

// Addition (+): returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction (-): returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication (×): returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division (÷): returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// Map of supported operation names to their functions
const operations = { add, subtract, multiply, divide };

// CLI entry point
function main() {
  const [, , op, rawA, rawB] = process.argv;

  if (!op || rawA === undefined || rawB === undefined) {
    console.error('Usage: node src/calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exit(1);
  }

  if (!operations[op]) {
    console.error(`Unknown operation "${op}". Choose from: add, subtract, multiply, divide`);
    process.exit(1);
  }

  const a = parseFloat(rawA);
  const b = parseFloat(rawB);

  if (isNaN(a) || isNaN(b)) {
    console.error('Both num1 and num2 must be valid numbers');
    process.exit(1);
  }

  try {
    const result = operations[op](a, b);
    console.log(`${a} ${op} ${b} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}

// Only run CLI logic when executed directly (not when imported as a module)
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide };

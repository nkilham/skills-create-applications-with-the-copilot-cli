#!/usr/bin/env node

/**
 * calculator.js — Node.js CLI Calculator
 *
 * Supported operations:
 *   add        (+)  — Addition:         returns the sum of two numbers
 *   subtract   (-)  — Subtraction:      returns the difference of two numbers
 *   multiply   (x)  — Multiplication:   returns the product of two numbers
 *   divide     (÷)  — Division:         returns the quotient of two numbers
 *   modulo     (%)  — Modulo:           returns the remainder of a divided by b
 *   power      (**)  — Exponentiation:  returns base raised to the exponent
 *   squareRoot (√)  — Square Root:      returns the square root of n
 *
 * Usage:
 *   node src/calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node src/calculator.js add 5 3           → 8
 *   node src/calculator.js subtract 9 4      → 5
 *   node src/calculator.js multiply 3 7      → 21
 *   node src/calculator.js divide 10 2       → 5
 *   node src/calculator.js modulo 10 3       → 1
 *   node src/calculator.js power 2 8         → 256
 *   node src/calculator.js squareRoot 25     → 5
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

// Modulo (%): returns the remainder of a divided by b
// Throws an error if b is zero to prevent division by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// Power (**): returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root (√): returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(n);
}

// Map of supported operation names to their functions
const operations = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
function main() {
  const [, , op, rawA, rawB] = process.argv;

  if (!op || rawA === undefined) {
    console.error('Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|power|squareRoot> <num1> [num2]');
    process.exit(1);
  }

  if (!operations[op]) {
    console.error(`Unknown operation "${op}". Choose from: add, subtract, multiply, divide, modulo, power, squareRoot`);
    process.exit(1);
  }

  const a = parseFloat(rawA);

  if (isNaN(a)) {
    console.error('num1 must be a valid number');
    process.exit(1);
  }

  // squareRoot only requires one argument
  if (op === 'squareRoot') {
    try {
      const result = squareRoot(a);
      console.log(`squareRoot(${a}) = ${result}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    return;
  }

  if (rawB === undefined) {
    console.error('num2 is required for this operation');
    process.exit(1);
  }

  const b = parseFloat(rawB);

  if (isNaN(b)) {
    console.error('num2 must be a valid number');
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

/**
 * calculator.test.js — Comprehensive unit tests for calculator.js
 *
 * Supported operations under test:
 *   add        (+)  — Addition
 *   subtract   (-)  — Subtraction
 *   multiply   (*)  — Multiplication
 *   divide     (÷)  — Division
 *   modulo     (%)  — Modulo
 *   power      (^)  — Power
 *   squareRoot (√)  — Square Root
 *
 * Base examples from spec images:
 *   2  + 3  = 5
 *   10 - 4  = 6
 *   45 * 2  = 90
 *   20 / 5  = 4
 *   5  % 2  = 1
 *   2  ^ 3  = 8
 *   √16     = 4
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// ─── Addition (+) ─────────────────────────────────────────────────────────────
describe('add', () => {
  // Base case from image: 2 + 3 = 5
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds two negative numbers', () => {
    expect(add(-5, -7)).toBe(-12);
  });

  test('adding zero returns the same number', () => {
    expect(add(42, 0)).toBe(42);
  });

  test('adding two zeros returns zero', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('adds floating-point numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('adds large numbers', () => {
    expect(add(1_000_000, 2_000_000)).toBe(3_000_000);
  });
});

// ─── Subtraction (-) ──────────────────────────────────────────────────────────
describe('subtract', () => {
  // Base case from image: 10 - 4 = 6
  test('10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts two positive numbers', () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test('result is negative when b > a', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts a negative number (double negative)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts two negative numbers', () => {
    expect(subtract(-4, -2)).toBe(-2);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(99, 0)).toBe(99);
  });

  test('subtracting a number from itself returns zero', () => {
    expect(subtract(7, 7)).toBe(0);
  });

  test('subtracts floating-point numbers', () => {
    expect(subtract(0.9, 0.1)).toBeCloseTo(0.8);
  });
});

// ─── Multiplication (*) ───────────────────────────────────────────────────────
describe('multiply', () => {
  // Base case from image: 45 * 2 = 90
  test('45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplies a positive and a negative number', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('multiplies two negative numbers yields a positive', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(12345, 0)).toBe(0);
  });

  test('multiplying by one returns the same number', () => {
    expect(multiply(77, 1)).toBe(77);
  });

  test('multiplies floating-point numbers', () => {
    expect(multiply(0.5, 0.4)).toBeCloseTo(0.2);
  });

  test('multiplies large numbers', () => {
    expect(multiply(1000, 1000)).toBe(1_000_000);
  });
});

// ─── Division (÷) ─────────────────────────────────────────────────────────────
describe('divide', () => {
  // Base case from image: 20 / 5 = 4
  test('20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(100, 4)).toBe(25);
  });

  test('divides a negative by a positive', () => {
    expect(divide(-18, 3)).toBe(-6);
  });

  test('divides two negative numbers yields a positive', () => {
    expect(divide(-20, -4)).toBe(5);
  });

  test('divides a positive by a negative', () => {
    expect(divide(15, -3)).toBe(-5);
  });

  test('dividing zero by a number returns zero', () => {
    expect(divide(0, 9)).toBe(0);
  });

  test('divides to a floating-point result', () => {
    expect(divide(1, 3)).toBeCloseTo(0.3333, 4);
  });

  test('divides floating-point numbers', () => {
    expect(divide(0.6, 0.2)).toBeCloseTo(3);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });

  test('throws an error when dividing a negative number by zero', () => {
    expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed');
  });
});

// ─── Modulo (%) ───────────────────────────────────────────────────────────────
describe('modulo', () => {
  // Base case from image: 5 % 2 = 1
  test('5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when a is exactly divisible by b', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('returns a when a is less than b', () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test('modulo with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('modulo with negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('modulo of zero by a number returns zero', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test('modulo with floating-point numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero
  test('throws an error when divisor is zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
  });

  test('throws an error when both operands are zero', () => {
    expect(() => modulo(0, 0)).toThrow('Modulo by zero is not allowed');
  });
});

// ─── Power (^) ────────────────────────────────────────────────────────────────
describe('power', () => {
  // Base case from image: 2 ^ 3 = 8
  test('2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('raises a number to the power of 1 returns itself', () => {
    expect(power(5, 1)).toBe(5);
  });

  test('raises a number to the power of 0 returns 1', () => {
    expect(power(99, 0)).toBe(1);
  });

  test('raises a number to a negative exponent', () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test('raises a negative base to an even exponent yields positive', () => {
    expect(power(-3, 2)).toBe(9);
  });

  test('raises a negative base to an odd exponent yields negative', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('raises zero to any positive power returns zero', () => {
    expect(power(0, 5)).toBe(0);
  });

  test('raises a number to a fractional exponent (square root)', () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });
});

// ─── Square Root (√) ──────────────────────────────────────────────────────────
describe('squareRoot', () => {
  // Base case from image: √16 = 4
  test('√16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('square root of 0 is 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('square root of 1 is 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  test('square root of a perfect square', () => {
    expect(squareRoot(81)).toBe(9);
  });

  test('square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test('square root of a floating-point number', () => {
    expect(squareRoot(0.25)).toBeCloseTo(0.5);
  });

  // Edge case: negative numbers
  test('throws an error for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take the square root of a negative number');
  });

  test('throws an error for large negative numbers', () => {
    expect(() => squareRoot(-100)).toThrow('Cannot take the square root of a negative number');
  });
});

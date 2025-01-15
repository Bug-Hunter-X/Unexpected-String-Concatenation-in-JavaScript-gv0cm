# Unexpected String Concatenation in JavaScript

This example demonstrates a common JavaScript pitfall: the unexpected string concatenation that occurs when performing arithmetic operations on variables with different data types.

## Bug Description

JavaScript's dynamic typing can lead to implicit type coercion. In this case, when we try to add a number and a string, the `+` operator performs string concatenation instead of numerical addition. This behavior might be unexpected, leading to errors.

## Bug Reproduction

1.  Clone this repository.
2.  Run `node bug.js`.
3. Observe the unexpected output (12 instead of 3).

## Solution

The solution involves explicit type checking and conversion to prevent this type coercion.
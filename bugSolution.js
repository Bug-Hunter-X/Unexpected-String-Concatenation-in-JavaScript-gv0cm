function foo(a, b) {
  // Check if both a and b are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numerical addition
  } else {
    // Handle type mismatch (e.g., throw an error or convert to numbers)
    console.error("Error: Both inputs must be numbers.");
    return NaN; // Or handle the error differently
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, '2')); // Output: Error: Both inputs must be numbers.
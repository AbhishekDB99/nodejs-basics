/**
 * Higher-Order Functions in JavaScript:
 *
 * - A Higher-Order Function is a function that:
 *   → Takes one or more functions as arguments, OR
 *   → Returns another function.
 *
 * - Common examples: Array methods like map(), filter(), reduce().
 *
 * Examples:
 * 1. Passing a function:
 *    processUserInput(greet);
 *
 * 2. Returning a function:
 *    const double = multiplier(2);
 *    double(5); // returns 10
 */


function greet(name) {
    return "Hello, " + name;
  }
  
  function processUserInput(callback) {
    const name = "Alice";
    console.log(callback(name)); // Calls greet("Alice")
  }
  
  processUserInput(greet); // Output: Hello, Alice
  
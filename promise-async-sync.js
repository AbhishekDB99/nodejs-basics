/**
 * Promises, Async/Await, and Async Execution in JS:
 *
 * - A Promise represents the result of an async operation.
 *   It has three states: pending, fulfilled, and rejected.
 *
 * - async/await is syntactic sugar over Promises.
 *   It allows writing asynchronous code that looks synchronous.
 *
 * - JavaScript executes async code using:
 *   1. Web APIs / Node APIs for async operations
 *   2. Microtask queue (Promises, async/await)
 *   3. Macrotask queue (setTimeout, setInterval, etc.)
 *   4. Event Loop – coordinates between call stack and queues.
 *
 * Example:
 *   console.log("1");
 *   setTimeout(() => console.log("2"), 0);
 *   Promise.resolve().then(() => console.log("3"));
 *   console.log("4");
 *
 * Output: 1, 4, 3, 2
 */

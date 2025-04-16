/**
 * Event Loop & Async Behavior in Node.js:
 *
 * - Node.js uses a single thread but supports async operations via an Event Loop.
 * - Async tasks (I/O, timers, etc.) are handled by Node APIs or libuv in the background.
 * - Once done, their callbacks are pushed into a queue for the Event Loop to process.
 *
 * Event Loop Flow:
 * 1. Run sync code.
 * 2. Offload async tasks.
 * 3. Run microtasks (like Promise.then).
 * 4. Process queued async callbacks (timers, I/O, etc.).
 *
 * Example:
 *   console.log("Start");
 *   setTimeout(() => console.log("Timeout"), 0);
 *   Promise.resolve().then(() => console.log("Promise"));
 *   console.log("End");
 *
 * Output:
 *   Start
 *   End
 *   Promise
 *   Timeout
 */


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

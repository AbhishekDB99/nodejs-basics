/**
 * First-Class Functions in JavaScript:
 *
 * - JavaScript treats functions as first-class citizens.
 * - This means functions can be:
 *   → Assigned to variables (e.g., const storeFunc = function() {...})
 *   → Passed as arguments to other functions (e.g., letsSee(firstClassFunc))
 *   → Returned from other functions
 *
 * In the example:
 * - `firstClassFunc` is passed to `letsSee`, which calls it and logs the return value.
 * - `storeFunc` is a function expression stored in a variable and invoked directly.
 */


function firstClassFunc(){
    return "HEllo"
}

function letsSee(firstClassF){
    console.log(firstClassF(),"yz")
}

// letsSee(firstClassFunc)

const storeFunc = function (){
    console.log("testing");
}

storeFunc()
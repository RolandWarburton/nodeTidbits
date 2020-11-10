let result;

// ##──── Define the add() function ─────────────────────────────────────────────────────────
function add(a) {
	return function (b) {
		return a + b;
	};
}

// ? can also be written as this with arrow functions
// const add = (a) => {
// 	return (b) => {
// 		return a + b;
// 	};
// }

// ##──── Exploring how functions are returned ──────────────────────────────────────────────
// without the 2nd ()() we return a function that can still be "consumed" or "used"
console.log(add("hello")); // returns: [Function (anonymous)]

// we can also store this anonymous returned function somewhere
result = add("hello");
console.log(result); // returns: [Function (anonymous)]

// then call that returned anonymous (now assigned to result) function
console.log(result("world")); // returns: helloworld

// ##──── Correct use ───────────────────────────────────────────────────────────────────────
// correct use of this combined into one "curryied" function call
result = result = add("hello")("world");
console.log(result);

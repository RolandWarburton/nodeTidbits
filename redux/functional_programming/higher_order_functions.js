const { compose, pipe } = require("lodash/fp");
// ##========================================================================================
// ##                                                                                      ##
// ##                             functional programming basics                            ##
// ##                                                                                      ##
// ##========================================================================================

// ##──── HOF - higher order functions ──────────────────────────────────────────────────────
// A HOF is a function that takes another function as an argument
// eg array.map((e) => {})
// eg setTimeout(() => {}, 1000)

// Reducing a(b(c())) parenthises bloat with lodash
// const { compose, pipe } = require("lodash");
const a = (str) => {
	return (str += "transform A ");
};

const b = (str) => {
	return (str += "transform B ");
};

const c = (str) => {
	return (str += "transform C ");
};

const transform = compose(a, b, c);
console.log(transform(""));
// OUTPUT: transform C transform B transform A

// ##──── currying functions ────────────────────────────────────────────────────────────────
// ? This wont work (you need to use the 'function' keyword)
const add = (a) => {
	return (b) => {
		a + b;
	};
};

// ? this will work (because function hoisting i think)
function add(a) {
	return function (b) {
		return a + b;
	};
}
// the curryied function is calling with add(a)(b)
// the returned function has a within its scope because magic
console.log(add(1)(5));

// ? currying with arrow functions
// heres a non curryied version
const add = (a, b) => a + b;
// its called like this. add 1 to 2
add(1, 2);

// heres the above but curryied
const add = (a) => (b) => a + b;
// its called in the same way. add 1 to 2
add(1)(2);

// the advantage of currying is that it allows the add() components to be testable, modular, and exportable
// in this example the add() function is used to implement a function incrementBy that increments an entire array by a number
// see currying_increment_array_example.js for more explanation
const incrementBy = (arr, by) => {
	arr.map(add(by));
};

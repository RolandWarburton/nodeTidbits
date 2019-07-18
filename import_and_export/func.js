// func.js
"use strict";

const a = 10
const b = 20
const add = (a,b) => a + b;
function subtract(a,b) {
	return a-b;
};

// exporting different things
export {a, b, add, subtract};

// exporting a value in 1 line
export const myvalue = 1.1;

// export with an alias for importing
export {a as myalias}

// exports it all as one object? also you can name it anything when you import it
export default {a, b};
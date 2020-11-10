// ? heres a non curryied version of add()
// const add = (a, b) => a + b;

// heres the curryied version of the above
const add = (a) => (b) => a + b;
// its called like this
// add(1)(2);

// use the map function to wrap our add function that takes two things (a)(b)
// the first curryied function is the element returned by arr.map()
// the seccond function () is the add() function
// on the first iteration for example: add(arr[0])(1)
const incrementBy = (arr, by) => {
	return arr.map(add(by));
};

const result = incrementBy([1, 2, 3], 1);
console.log(result);

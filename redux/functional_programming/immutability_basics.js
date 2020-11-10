const { Map } = require("immutable");
const { produce } = require("immer");
// ##========================================================================================
// ##                                                                                      ##
// ## Immutability basics                                                                  ##
// ##                                                                                      ##
// ##========================================================================================

// Immutability means that an object cannot me mutated (changed) after being created. the const keyword helps with this but doesnt solve it.
// For example const person = {name: "roland", location: "home"} can still have its person.name changed after the fact.

// One way of combatting the example above is to use the Object.assign method
// object.assign takes these arguments:

// A new empty object {},
// The object that you are copying into that object (person),
// And optionally any new values you want to mutate {location: "uni"}.

// This allows a new object to be created with all the same values of the old object, plus giving you the ability to change some of the values,
// the new object must be stored somewhere else, and the old object remains the same (immutable)

const person = { name: "roland", loc: "home" };
const updated = Object.assign({}, person, { loc: "uni" });
console.log(updated);

// A more efficient/shorthand way of the above is to use the spread operator
const person2 = { name: "roland", loc: "home" };
const updated2 = { ...person2, loc: "uni" };
console.log(updated2);

// ##──── Dealing with nested properties ────────────────────────────────────────────────────
// A problem that can happen is when you want to update an object with nested properties
// to resolve this you need to "deep copy" and drill into the specific object you want to mutate by using multiple spread operators
const person3 = {
	name: "roland",
	address: { zip: 3155, state: "victoria" },
};
const updated3 = { ...person3, address: { ...person3.address, zip: 1155 } };

// ##──── Immutability and arrays ───────────────────────────────────────────────────────────
// ? Adding
const numbers = [1, 2, 3];
// to push a number to an array and maintain immutability
const added = [4, ...numbers];
// to insert at a specific position
const index = numbers.indexOf(2);
const added2 = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

// ? removing
// remove the number 2
const removed = numbers.filter((n) => n !== 2);

// ? updating
// update the number 2 to 20
const updated4 = numbers.map((n) => (n === 2 ? 20 : n));

// ##──── Enforcing immutability ────────────────────────────────────────────────────────────
// JS is multi paradigm meaning that it doesnt enforce immutability (its can only be suggested with the patterns above)
// to achieve true enforcable immutability you need to use a library such as "immutable", "immer", or "mori".

// Method one: Using immutable library

// ? using the Map object (no relation to array.map) provided by immutable library
// ? we can enforce the immutability of key value pairs
// we dont want to use this
let book = { title: "poggers" };
// book should wrapped in Map like this
book = Map({ title: "poggers" });

// print as JS
const bookAsJS = book.toJS();
console.log(bookAsJS);

// immutable library uses a different api so we need to use the "get" method to print the value
console.log(book.get("title"));

// When we want to update the title we use the "set" method which returns an entirely new object
const newBook = book.set("title", "poggers 2 electric boogaloo");
console.log(newBook.get("title"));

// Method two: Using immer library
let car = { color: "red" };

// print as js. no new API required
console.log(car);

const newCar = produce(car, (newCar) => {
	newCar.color = "blue";
});

console.log(newCar);

// an example of immer in a function
function changeCarColor(car) {
	return produce(car, (draftCar) => {
		draftCar.color = "orange";
	});
}

console.log(changeCarColor(car));

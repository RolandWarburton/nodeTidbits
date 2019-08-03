// should be included in package.json:	"type": "module",
// run with:	node --experimental-modules main.js
"use strict";

//main.js

// import 1 thing
import {a, add, subtract, myalias} from './func.js';
// import everything
import * as utils from './func.js';
// you can also import things that are 'defaults'
import defaults from './func.js';

// this is 1 thing imported
console.log(a);
console.log(utils.a); // taking it from the: import *
// this is multiple things imported
console.log(defaults);
console.log(defaults.b);
// this is a function thats imported
console.log(add(1,2));
// another example of above
console.log(subtract(10,2));

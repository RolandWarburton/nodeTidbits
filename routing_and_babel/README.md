# vanilla routing and babel setup
file structure:
node_routing/
├── lib/
│   ├── app.js
│   └── server.js
├── src/
│   ├── app.js
│   └── server.js
├── node_modules/
│   └── all the node stuff
├── .babelrc
├── package.json
├── package-lock.json
├── index.html
├── page2.html
└── 404.html

##what does .babelrc do?
this is part of the [babel setup](https://babeljs.io/en/setup#installation).
this sets the env preset, which enables transforms for ES2015+.

##what is the purpose of /src and /lib
/src contains ES6 code and is converted to ES5 for babel with the scripts inside package.json.




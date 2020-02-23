# Hello World!
This boilerplate is part of my [Folio Project](https://github.com/RolandWarburton/folioSite).

Its purpose is to try out express, and see how i can fit it into my folio website eventually.

This project is using Server Side Rending (SSR) to serve react components to the browser 💁

```
├── package.json
├── package-lock.json
├── readme.md
├── server.js
├── src
│   ├── app.js
│   ├── client.js
│   └── pages
│       └── Home.js
├── webpack.development.js
└── webpack.production.js
```

# Running
You must build the app first before running it (the dir `/public` should exist before nodemon or the webpack dev server runs)
### Building for production
```npm run build:server``` => Prepare application for production deployment
```npm run build:compress``` => run uglifyjs and compress the client and server bundles. Make sure you have run `build:server` before compressing it
```npm monitor:server``` => Run nodemon on the server
### Running for development
```npm run dev-server``` => Builds webpack.development and monitors server with `monitor:server` script

# Notes
## Using express 'static' middleware to route pages
The code ```app.use(express.static('public'));``` in ```/server.js``` is using the ```express.static``` middleware. \
This line alone is able to allow the application to be aware of `index.html` and will serve it on the `/` route.

## Defining a route
1. A route for the path /test
```
app.get('/test', function (req, res, next) {
	res.send("Hello World")
})
```
2. A route that can have a parameter passed into it
```
app.get('/user/:id', function (req, res, next) {
	res.send(req.params.id)
})
```

## Handling 404's
use a route that matches everything (`app.get('*'...`) as the LAST route in your `/server.js` \
```
app.get('*', function (req, res) {
	res.status(404).send('what?');
});
```
You may also use this code to handle 404's from the [official express faq](https://expressjs.com/en/starter/faq.html)
```
app.use(function (req, res, next) {
	res.status(404).send("Sorry can't find that!")
})
```


## app.METHOD methods
Express uses these **HTML** methods for routing requests. \
### HTML requests
These requests are used the most for HTML requests (GET, POST, PUT, DELETE)
* ```app.get()``` The HTML get method. This one is used the most because it is the method for requesting HTML pages
* ```app.post()``` The HTML post method
* ```app.put()``` Think of a PUT statement in SQL
* ```app.delete()``` Think of a DELETE statement in SQL

## Middleware
### Middleware requests
* Middleware can execute code, and modify the req/res/next objects in the applications request-response cycle.
* Middleware can be used on either the Route level or the Application level.
* Middleware is called by using ```app.use()```

### Example of middleware
1. Simple Example
```
app.use('/user/:id', function (req, res, next) {
	const message = "ALLOWED: Hi roland"
	if (req.params.id === "roland") {
		console.log(message)
	} else {
		console.log("DENINED: " + req.params.id)
	}
	next()
})
```
2. The simple example but in a modular variable
```
const valRoland = function (req, res, next) {
	const message = "ALLOWED: Hi roland"
	if (req.params.id === "roland") {
		console.log(message)
	} else {
		console.log("DENINED: " + req.params.id)
	}
	next()
}

// Now call the middleware with
app.use('/user/:id', valRoland);
```

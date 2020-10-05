
# Instructions & Notes

```none
├── package.json <- For starting both the client and server
├── package-lock.json
├── public/* <- React payload
├── server <- Express server
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── public <- Some accessible static resources for react. eg "localhost/users.json"
│       ├── css
│       │   └── style.css
│       ├── index.html
│       ├── js
│       │   └── index.js
│       └── users.json
└── src <- React app frontend thats served through express.static after being bundled by the script in top layer package.json
	├── App.css
	├── App.js
	├── App.test.js
	├── index.css
	├── index.js
	├── logo.svg
	├── serviceWorker.js
	└── setupTests.js
```

Bootstrapped with [This tutorial](https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b), i have updated it to be a bit simpler and to use modern react functional components instead of class based components. And ofc `npx create-react-app` by facebook.

## Areas of interest

### How the react app is served with express

`server/index.js`.

```js
// serve some static assets in server/public for example server/public/users.json
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
```

### How the project is started

`/package.json` builds the react app in production mode and bundle it in `/build`. THEN cd into server and run the start script in the servers `package.json`.

```json
// /package.json
"start": "npm run build && (cd server && npm start)"
```

```json
// /server/package.json
"start": "nodemon index.js"
```

### Serve some express specific resource from react

This is done by fetching it through a standard GET request.

`/src/App.js`.

```js
function App() {
	useEffect(() => {
		fetchItems();
	}, []);

	const fetchItems = async () => {
		const data = await fetch("/users.json");
		console.log(await data.json());
	};
	return (
		<div className="App">
			Learn React
		</div>
	);
}

export default App;
```

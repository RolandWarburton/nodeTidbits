const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose');
const db = require('./database')
const tracks = require('./routes/tracks')



const app = express()
const port = 8080

app.use(cors());
// app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// static routes for the track API
app.use('/api', tracks);

// point express to the dist folder
app.use(express.static('dist'));

// serve up the content and let react-router-dom take care of the rest 👨‍🍳
app.get('*', (req, res) => res.status(200).sendFile(path.resolve(__dirname, 'dist', 'index.html')));



// const uri = process.env.DB_CONNECTION;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




// app.use((req, res, next) => {
// 	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
// 	  if (error) {
// 		res.status(500).send(error.message)
// 	  } else if (redirectLocation) {
// 		res.redirect(302, redirectLocation.pathname + redirectLocation.search)
// 	  } else if (renderProps) {
// 		   // You can also check renderProps.components or renderProps.routes for
// 		  // your "not found" component or route respectively, and send a 404 as
// 		  // below, if you're using a catch-all route.

// 		  // Here you can pre render component or just send index.html 
// 		  // For pre rendering see "renderToString(<RouterContext {...renderProps} />)"
// 		  res.status(200).send("aaa")
// 	  } else {
// 		res.status(404).send('Not found')
// 	  }
// 	})
//   });


// app.use('/tracks/:id', tracks);

// api

// app.get('/api/tracks/:id', (req, res) => {
// 	res.send(req.params.id)
// })

// app.use('/api/tracks/*', () => {
// 	console.log("middleware!")
// })




// catch all
// app.get('/*', function (req, res) {
// 	res.redirect('/404');
// });

app.listen(port, () => console.log(`Server running on ${port}`))

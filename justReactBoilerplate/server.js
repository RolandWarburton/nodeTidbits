const path = require('path')
const express = require('express')
const app = express()
const port = 8080

app.use(express.static('dist'))

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html')))

app.listen(port, () => console.log(`Server running on ${port}`))

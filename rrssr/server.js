import express from 'express'
import React from 'react'
// import bodyParser from 'body-parser'
import App from './src/app'
import {renderToString} from 'react-dom/server'
import { StaticRouter } from 'react-router'

const port = 8080
const compression = require('compression')

const app = express()
app.use(compression())
app.use(express.json())
app.use(express.static('build/public'))

app.get('*', (req, res, next) => {
    const context = {}

    const content = renderToString(
        <StaticRouter>
            <App location={req.url} content={context} />
        </StaticRouter>
    )

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Roland</title>
    </head>
    <body>
        <div id='root'>${content}</div>
        <script src="client_bundle.js"></script>
    </body>
    </html>
    `

    res.send(html)
})

app.listen(port, () => { console.log(`Server running on port ${port}`) })


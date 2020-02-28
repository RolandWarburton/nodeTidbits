import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.development'

const app = express()
const PORT = process.env.PORT || 8080
const DIST_DIR = __dirname
const HTML_FILE = path.join(DIST_DIR, 'index.html')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res, next) => {
	compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
		if (err) {
			return next(err)
		}
		res.status(200).send(result).end()
	})
})

app.get('/about', (req, res, next) => {
	compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
		if (err) {
			return next(err)
		}
		res.status(200).send(result).end()
	})
})


app.listen(PORT, () => { console.log(`Server running on ${PORT}`) })

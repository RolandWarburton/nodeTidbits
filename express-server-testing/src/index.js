import logMessage from './js/logger'
import './styles/style.scss'

logMessage('Hello from src/index.js')

if (module.hot) {
	module.hot.accept();
}
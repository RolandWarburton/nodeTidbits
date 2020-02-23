import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './app'

ReactDom.hydrate(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.querySelector('#root')
)
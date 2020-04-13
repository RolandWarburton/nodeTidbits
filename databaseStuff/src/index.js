import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { render } from 'react-dom';
import Root from './components/Root';
// import Meta from './components/Meta';
// import Track from './components/Track';
// import NotFound from './components/NotFound';

ReactDOM.render(
	<BrowserRouter>
		<Root />
	</BrowserRouter>,
	document.getElementById('app'));
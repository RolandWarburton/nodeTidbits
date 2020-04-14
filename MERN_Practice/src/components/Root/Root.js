import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navigation from '../Navigation';
import Meta from '../Meta';
import Home from '../Home';
import Track from '../Track';
import NotFound from '../NotFound';

const Root = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/track/:name" component={Track} />
			<Route exact path="*" component={NotFound} />
		</Switch>
	);
}

export default Root;
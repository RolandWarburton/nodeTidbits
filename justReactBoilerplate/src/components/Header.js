import React from 'react';
import { Helmet } from "react-helmet";

const Header = function () {

	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>My Title</title>
			<link rel="canonical" href="https://rolandw.dev" />
		</Helmet>
	)
}

export default Header
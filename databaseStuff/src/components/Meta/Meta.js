import React from 'react';
import { Helmet } from "react-helmet";

const Meta = function ({pageName}) {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>{pageName ? pageName : "Roland"}</title>
			<link rel="canonical" href="https://rolandw.dev" />
		</Helmet>
	)
}

export default Meta
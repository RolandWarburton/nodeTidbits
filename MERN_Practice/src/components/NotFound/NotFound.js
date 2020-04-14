import React, { Fragment } from "react"
import Meta from "../Meta"

const NotFound = ({match}) => {
	const params = match.params
	// console.log(params)
	return (
		<Fragment>
			<Meta pageName="404!"/>
			<h1>oh no its a 404!</h1>
		</Fragment>
	);
}

export default NotFound;
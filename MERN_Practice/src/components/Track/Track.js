import React, { Fragment, useState } from "react"
import Meta from "../Meta"

const Track = ({ match }) => {
	const params = match.params
	return (
		<Fragment>
			<Meta pageName={params.name} />
			<h1>Track</h1>
			<div>
				<p>{params.name}</p>
				<img src="/api/track/a"></img>
			</div>
		</Fragment>
	);
}

export default Track;
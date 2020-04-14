import React, { Fragment } from "react"
import Meta from "../Meta"

const Track = ({match}) => {
	const params = match.params
	// console.log(params)
	return (
		<Fragment>
			<Meta pageName={params.name}/>
			<h1>Track</h1>
			<div>
				<p>{params.name}</p>
			</div>
		</Fragment>
	);
}

export default Track;
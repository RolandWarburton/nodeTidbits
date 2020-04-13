import React from "react"
import {Link} from "react-router-dom"

const NavLink = (params) => {
	return ( 
			<h3><Link to={params.to}>{params.name}</Link></h3>
	 );
}

const Navigation = () => {
	return ( 
		<nav>
			<NavLink to="/" name="home" />
			<NavLink to="/track/roland" name="roland" />
		</nav>
	 );
}
 
export default Navigation;
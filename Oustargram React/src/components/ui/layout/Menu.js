import React from 'react';
import { Link } from 'react-router-dom';

function Menu({ mobileMenu }) {
	return (
		<nav id="eskimo-main-menu" className="menu-main-menu-container" style={mobileMenu ? { display: 'block' } : { display: 'none' }}>
			<ul className="eskimo-menu-ul">
				{/* <li><Link to={"/sign"}>Sign In</Link></li> */}
				<li><Link to={"/"}>Home</Link></li>
				<li><Link to={"/addpost"}>Add Post</Link></li>
				<li><Link to={"/galleries"}>Galleries</Link></li>
				<li><Link to={"/about"}>About</Link></li>
				{/* <li><Link to={"/adminpage"}>Admin Page</Link></li> */}
			</ul>
		</nav>
	);
}

export default Menu;
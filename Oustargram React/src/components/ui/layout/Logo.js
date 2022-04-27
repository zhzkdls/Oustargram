import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<div id="eskimo-logo-cell" className="w-100">
			<Link className="eskimo-logo-link" to={"/"}>
				<img src="./images/Outstagram_Logo.svg" className="eskimo-logo" alt="" />
			</Link>
		</div>
	);
}

export default Logo;
import React from 'react';
import Creadits from '../ui/layout/Creadits';
import FooterWrapper from '../ui/layout/FooterWrapper';

function Footer() {
	return (
		<div id="eskimo-site-wrapper">
			<footer id="eskimo-footer">
				<div className="container">
					<FooterWrapper />
					<Creadits />
				</div>
			</footer>
		</div>
	);
}

export default Footer;
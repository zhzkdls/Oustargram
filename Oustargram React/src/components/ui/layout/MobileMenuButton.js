import React from 'react';

function MobileMenuButton({ mobileMenu, setMobileMenu }) {
	return (
		<div id="eskimo-menu-toggle" onClick={() => setMobileMenu(!mobileMenu)}>MENU</div>
	);
}

export default MobileMenuButton;
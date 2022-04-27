import React, { useState } from 'react';
import Menu from './Menu';
import MobileMenuButton from './MobileMenuButton';

function MenuContainer() {
	const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<div id="eskimo-sidebar-cell" className="w-100">
			<MobileMenuButton mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
			<Menu mobileMenu={mobileMenu} />
		</div>
	);
}

export default MenuContainer;
import React from 'react';
import Logo from '../ui/layout/Logo';
import MenuContainer from '../ui/layout/MenuContainer';
import SocialMediaIcon from '../ui/layout/SocialMediaIcon';

function Sidebar() {
	return (
		<div id="eskimo-sidebar">
			<div id="eskimo-sidebar-wrapper" className="d-flex align-items-start flex-column h-100 w-100">
				<Logo />
				<MenuContainer />
				<SocialMediaIcon />
			</div>
		</div>
	);
}

export default Sidebar;
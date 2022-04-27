import React from 'react';

function TopIcons({ setSearch }) {
	return (
		<>
			<ul className="eskimo-top-icons pointer">
				<li id="eskimo-panel-icon">
					<a href="#eskimo-panel" className="eskimo-panel-open"><i className="fa fa-bars"></i></a>
				</li>
				<li id="eskimo-search-icon">
					<div id="eskimo-open-search" onClick={() => setSearch(true)}><i className="fa fa-search"></i></div>
				</li>
			</ul>
			<div className="clearfix"></div>
		</>
	);
}

export default TopIcons;
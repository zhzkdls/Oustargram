import React from 'react';

function FullscreenSearch({ search, setSearch }) {
	return (
		<div id="eskimo-fullscreen-search" className="pointer" style={search ? { display: 'block' } : { display: 'none' }}>
			<div id="eskimo-fullscreen-search-content">
				<div onClick={() => setSearch(false)} id="eskimo-close-search"><i className="fa fa-times"></i></div>
				<form role="search" method="get" action="search.html" className="eskimo-lg-form">
					<div className="input-group">
						<input type="text" className="form-control form-control-lg" placeholder="Enter a keyword..." name="s" />
						<div className="input-group-append">
							<button type="submit" className="btn btn-default"><i className="fa fa-search"></i></button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default FullscreenSearch;
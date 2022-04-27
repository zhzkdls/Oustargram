import React from 'react';

function Paginations() {
	return (
		<div className="eskimo-pager">
			<ul className='pagination flex-wrap'>
				<li className='page-item active'><a className='page-link' href='#'>1</a></li>
				<li className='page-item'><a className='page-link' href='#'>2</a></li>
				<li className='page-item'><a className='page-link' href='#'>3</a></li>
				<li className='page-item'><a className='page-link' href=""><i className="fa fa-chevron-right"></i></a></li>
			</ul>
		</div>
	);
}

export default Paginations;
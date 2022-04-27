import React from 'react';
import { Link } from 'react-router-dom';

function Gallery({ titleImage, postId }) {
	return (
		<Link to={`/singlepost${postId}`} className="col-12 col-md-6 col-xl-4 overviewLink">
			<img className="overviewImg" src={`./images/${titleImage}`} alt="" />
		</Link >
	);
}

export default Gallery;
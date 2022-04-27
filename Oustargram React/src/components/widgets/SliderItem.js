import React from 'react';
import { Link } from 'react-router-dom';

function SliderItem({ post }) {
	return (
		<Link to={`/singlepost${post.id}`}>
			<div className="eskimo-slider-img"></div>
			<ul className="eskimo-slider-image-meta eskimo-image-meta-post">
				{
					post.categoryId && post.categoryId.map(item => (
						<li key={item.id}><span className="badge badge-default">{item.name}</span></li>
					))
				}
			</ul>
			<div className="clearfix"></div>
			<img src={`./images/${post.titleImage}`} alt={post.postTitle} />
			<div className="eskimo-slider-desc">
				<div className="eskimo-slider-desc-inner">
					<h2 className="card-title">{post.postTitle}</h2>
					<p className="card-text">{post.text}</p>
				</div>
			</div>
		</Link>

	);
}

export default SliderItem;
import React from 'react';

function Categories() {
	return (
		<div className="eskimo-categories eskimo-widget">
			<h5 className="eskimo-title-with-border"><span>Categories</span></h5>
			<ul>
				<li>
					<a href="category.html" title="The best restaurants, cafes, bars and shops in town.">Food &amp; Drink</a> <span className="badge badge-pill badge-default">5</span>
				</li>
				<li>
					<a href="category.html" title="An up-to-date, personal urban guide.">Lifestyle</a> <span className="badge badge-pill badge-default">5</span>
				</li>
				<li>
					<a href="category.html" title="Latest technology news and updates.">Technology</a> <span className="badge badge-pill badge-default">4</span>
				</li>
				<li>
					<a href="category.html" title="Travel advice, information and inspiration.">Travel</a> <span className="badge badge-pill badge-default">5</span>
				</li>
				<li>
					<a href="category.html" title="The latest news about movies and TV shows.">TV &amp; Movies</a> <span className="badge badge-pill badge-default">4</span>
				</li>
			</ul>
		</div>
	);
}

export default Categories;
import React from 'react';

function RecentPosts() {
	return (
		<div className="eskimo-recent-entries eskimo-widget">
			<h5 className="eskimo-title-with-border"><span>Recent Posts</span></h5>
			<ul>
				<li>
					<a href="single-post.html">Ketchup Flavored Ice Cream!</a>
					<span className="post-date">May 28, 2018</span>
				</li>
				<li>
					<a href="single-post.html">Hair You've Always Dreamed Of</a>
					<span className="post-date">May 27, 2018</span>
				</li>
				<li>
					<a href="single-post.html">15 Of The World's Best Carnivals</a>
					<span className="post-date">May 25, 2018</span>
				</li>
				<li>
					<a href="single-post.html">5 Ways to a Healthy Lifestyle</a>
					<span className="post-date">May 25, 2018</span>
				</li>
				<li>
					<a href="single-post.html">Best Breakfast In The World</a>
					<span className="post-date">May 23, 2018</span>
				</li>
			</ul>
		</div>
	);
}

export default RecentPosts;
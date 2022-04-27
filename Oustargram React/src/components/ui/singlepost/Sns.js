import React from 'react';

function Sns() {
	return (
		<div className="container">
			<div className="rrssb-buttons row">
				<li className="col rrssb-email">
					<a href="mailto:?Subject=Your%20Subject%20Here">
						<span className="rrssb-icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M21.386 2.614H2.614A2.345 2.345 0 0 0 .279 4.961l-.01 14.078a2.353 2.353 0 0 0 2.346 2.347h18.771a2.354 2.354 0 0 0 2.347-2.347V4.961a2.356 2.356 0 0 0-2.347-2.347zm0 4.694L12 13.174 2.614 7.308V4.961L12 10.827l9.386-5.866v2.347z" />
							</svg>
						</span>
						<span className="rrssb-text">Email</span>
					</a>
				</li>
				<li className="col rrssb-facebook">
					<a href="https://www.facebook.com/sharer/sharer.php?u=http://eskimo.egemenerd.com/html/single-post.html" className="popup">
						<span className="rrssb-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29">
								<path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z" />
							</svg>
						</span>
						<span className="rrssb-text">Facebook</span>
					</a>
				</li>
				<li className="col rrssb-twitter">
					<a href="https://twitter.com/intent/tweet?text=http://eskimo.egemenerd.com/html/single-post.html" className="popup">
						<span className="rrssb-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
								<path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62a15.093 15.093 0 0 1-8.86-2.32c2.702.18 5.375-.648 7.507-2.32a5.417 5.417 0 0 1-4.49-3.64c.802.13 1.62.077 2.4-.154a5.416 5.416 0 0 1-4.412-5.11 5.43 5.43 0 0 0 2.168.387A5.416 5.416 0 0 1 2.89 4.498a15.09 15.09 0 0 0 10.913 5.573 5.185 5.185 0 0 1 3.434-6.48 5.18 5.18 0 0 1 5.546 1.682 9.076 9.076 0 0 0 3.33-1.317 5.038 5.038 0 0 1-2.4 2.942 9.068 9.068 0 0 0 3.02-.85 5.05 5.05 0 0 1-2.48 2.71z" />
							</svg>
						</span>
						<span className="rrssb-text">Twitter</span>
					</a>
				</li>
				<li className="col rrssb-tumblr">
					<a href="http://tumblr.com/share/link?url=http://eskimo.egemenerd.com/html/single-post.html&amp;name=Title%20Here">
						<span className="rrssb-icon">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
								<path d="M18.02 21.842c-2.03.052-2.422-1.396-2.44-2.446v-7.294h4.73V7.874H15.6V1.592h-3.714s-.167.053-.182.186c-.218 1.935-1.144 5.33-4.988 6.688v3.637h2.927v7.677c0 2.8 1.7 6.7 7.3 6.6 1.863-.03 3.934-.795 4.392-1.453l-1.22-3.54c-.52.213-1.415.413-2.115.455z" />
							</svg>
						</span>
						<span className="rrssb-text">tumblr</span>
					</a>
				</li>
				<li className="col rrssb-googleplus">
					<a href="https://plus.google.com/share?url=http://eskimo.egemenerd.com/html/single-post.html" className="popup">
						<span className="rrssb-icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M21 8.29h-1.95v2.6h-2.6v1.82h2.6v2.6H21v-2.6h2.6v-1.885H21V8.29zM7.614 10.306v2.925h3.9c-.26 1.69-1.755 2.925-3.9 2.925-2.34 0-4.29-2.016-4.29-4.354s1.885-4.353 4.29-4.353c1.104 0 2.014.326 2.794 1.105l2.08-2.08c-1.3-1.17-2.924-1.883-4.874-1.883C3.65 4.586.4 7.835.4 11.8s3.25 7.212 7.214 7.212c4.224 0 6.953-2.988 6.953-7.082 0-.52-.065-1.104-.13-1.624H7.614z" />
							</svg>
						</span>
						<span className="rrssb-text">Google +</span>
					</a>
				</li>
			</div>
		</div>
	);
}

export default Sns;
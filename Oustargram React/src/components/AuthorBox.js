import React from 'react';

function AuthorBox() {
	return (
		<div className="eskimo-author-box eskimo-widget">
			<div className="eskimo-author-img">
				<img src="images/300x300.png" alt="JOHN DOE" />
			</div>
			<h3><span>JOHN DOE</span></h3>
			<p className="eskimo-author-subtitle">WEB DESIGNER &amp; DEVELOPER</p>
			<p className="eskimo-author-description">I'm a Web Developer and Designer with a strong passion for UX/UI design. I have experience building websites, web applications, and brand assets. Contact me if you have any questions!</p>
			<div className="eskimo-author-box-btn">
				<a className="btn btn-default" href="about.html">CONTACT ME</a>
			</div>
		</div>
	);
}

export default AuthorBox;
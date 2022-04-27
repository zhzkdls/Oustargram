import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";

function GoToTopButton() {
	let url = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [url])

	return (
		<div id="eskimo-gototop" onClick={() => window.scrollTo(0, 0)}><i className="fa fa-chevron-up pointer"></i></div>
	);
}

export default GoToTopButton;
import React from 'react';

function ReadingPositionIndicator() {
	return (
		<progress value="0" id="eskimo-progress-bar">
			<span className="eskimo-progress-container">
				<span className="eskimo-progress-bar"></span>
			</span>
		</progress>
	);
}

export default ReadingPositionIndicator;
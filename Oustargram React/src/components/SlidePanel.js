import React from 'react';
import AuthorBox from './AuthorBox';
import Categories from './Categories';
import CloseSlidePanelButton from './CloseSlidePanelButton';
import RecentPosts from './RecentPosts';
import Tags from './Tags';

function SlidePanel() {
	return (
		<div id="eskimo-panels">
			<aside id="eskimo-panel" className="eskimo-panel">
				<div className="eskimo-panel-inner">
					<CloseSlidePanelButton />
					<AuthorBox />
					<RecentPosts />
					<Categories />
					<Tags />
				</div>
			</aside>
		</div>
	);
}

export default SlidePanel;
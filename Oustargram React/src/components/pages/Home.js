import React from 'react';
import MainContainer from './MainContainer';
import ReadingPositionIndicator from '../ReadingPositionIndicator';
import SlidePanel from '../SlidePanel';
import SlidePanelOverlay from '../SlidePanelOverlay';

function Home() {
	return (
		<>
			<ReadingPositionIndicator />
			<MainContainer />
			<SlidePanelOverlay />
			<SlidePanel />
		</>
	);
}

export default Home;
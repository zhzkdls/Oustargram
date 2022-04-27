import React, { useState } from 'react';
import PageTitle from '../widgets/PageTitle';
import Slider from '../widgets/Slider';
// import TopIcons from './widgets/TopIcons';
import FullscreenSearch from '../FullscreenSearch'
import Post from '../ui/post/Post';

function MainContainer() {
	const [search, setSearch] = useState(false);
	const [more, setMore] = useState(2);

	return (
		<>
			<div id="eskimo-site-wrapper">
				<PageTitle title="SNS Contents" />
				<main id="eskimo-main-container">
					<div className="container">
						{/* <TopIcons setSearch={setSearch} /> */}
						<Slider />
						<Post more={more} />
					</div>
					<div className="d-flex justify-content-center">
						<button onClick={() => setMore(more + 2)} type="button" class="btn btn-primary">더 불러오기</button>
					</div>
				</main>
			</div>
			<FullscreenSearch search={search} setSearch={setSearch} />
		</>
	);
}

export default MainContainer;

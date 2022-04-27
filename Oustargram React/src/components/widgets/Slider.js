import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SliderOutstagram from "react-slick";
import SliderItem from './SliderItem';

function Slider() {
	const url = "http://localhost:8080/api/post/getAll";
	const [sliders, setSliders] = useState([]);
	const settings = {
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 1,
		adaptiveHeight: true,
		slidesToShow: 1,
		arrows: true,
		dots: false,
		fade: true
	};

	useEffect(() => {
		axios.get(url).then(Response => setSliders(Response.data));
	}, [url])
	if (sliders.length < 2) {
		return null;
	}
	return (
		<div className="eskimo-carousel-container">
			<SliderOutstagram id="eskimo-post-slider" className="eskimo-slider" {...settings} style={{ opacity: 1 }}>
				{
					sliders.map(slider => (
						<SliderItem
							key={slider.id}
							post={slider}
						/>
					))
				}
			</SliderOutstagram>
		</div>
	);
}

export default Slider;
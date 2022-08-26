import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Slide() {
	const [url, setUrl] = useState("");

	const fetchImg = async () => {
		const img = (await axios.get("/img")).data.image_url;
		console.log(img, "fetchImg");
		setUrl(img);
	};

	// async function getUrl() {
	// 	const response = await fetch("https://source.unsplash.com/random");
	// 	const url = response.url;
	// 	// setUrl(url);
	// }

	useEffect(() => {
		// getUrl();
		fetchImg();
		// setUrl(fetchImg());
		// console.log(url, "URL HERE");
	}, []);

	return (
		<section>
			<h1>Slide display here</h1>
			<img src={url} className="slide-img" alt="slide-image via urlstate" />
		</section>
	);
}

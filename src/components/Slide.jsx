import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Slider.css";

export default function Slide() {
	const DEFAULT =
		"https://lh3.googleusercontent.com/pw/AL9nZEUGpXiX63tlViv3Du6fCPXUapy6xNN03JbI3awcQwRIQZBmW3wNmUJiiIpYnLwZ6UbtlYcN8-2jAfvIq0HdFF-BgCTqKkmgVhV_ZXXaq3PChww6RiIAPY9c4U3S2qBdt6U3q5Avoil7nVOkjdUHzmU=w1257-h838-no";
	const CONCLUTION =
		"https://lh3.googleusercontent.com/pw/AL9nZEWIOp8lPoP8jL3yQ39laDrccFU040-DXbgd-oKetxzA5p2TDUOb5xslkLSi_9F5KuN9U9Z529wV7KYDo3bQwm6PEch499H3YewKVJJTU7oOl5Lz1BQiPGyib7PUaoi2wABX_7C7VBuyUIqe3qCJaVg=w1348-h846-no?authuser=0";

	const [url, setUrl] = useState(DEFAULT);
	const [count, setCount] = useState(0);
	const [title, setTitle] = useState("");
	const [toId, setToId] = useState(0);

	const fetchImg = async () => {
		const img = (await axios.get("/img")).data.image_url;
		// const img = (await axios.get("/random")).data;
		console.log(img, "fetchImg");
		setUrl(img);
	};

	const start = () => {
		setCount(1);
	};

	const getRandomWord = async () => {
		const words = [];
		// import from https://www.mediawiki.org/wiki/API:Random/ja#JavaScript
		var url = "https://ja.wikipedia.org/w/api.php";
		var params = {
			action: "query",
			format: "json",
			list: "random",
			rnlimit: "5",
		};

		url = url + "?origin=*";
		Object.keys(params).forEach(function (key) {
			url += "&" + key + "=" + params[key];
		});

		await fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (response) {
				var randoms = response.query.random;
				for (var r in randoms) {
					words.push(randoms[r].title);
					// console.log(randoms[r].title);
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		console.log(words, "randamuwa-dodayo");
		return words;
	};

	const createTitle = async () => {
		const list = await getRandomWord();
		let string = `${list[0]} の ${list[4]}`;
		setTitle(string);
	};

	const waitShort = () => {
		setToId(
			setTimeout(() => {
				setCount(count + 1);
			}, 3000)
		);
	};

	// スライドの画像が表示される時間（30秒に設定？）
	const waitLong = () => {
		setToId(
			setTimeout(() => {
				setCount(count + 1);
			}, 5000)
		);
	};

	useEffect(() => {
		if (count === 0) {
			// do nothing
			setUrl(DEFAULT);
		} else if (count === 6) {
			setUrl(CONCLUTION);
			waitShort();
		} else if (count === 7) {
			fetchImg();
		} else if (count < 8) {
			fetchImg();
			waitLong();
		}
	}, [count]);

	return (
		<section>
			<div className="show-count">Slide display here {count}</div>
			<div className="buttons">
				<button onClick={() => start()}>START</button>
				<button onClick={() => clearInterval(toId)}>STOP</button>
				<button onClick={() => setCount(count + 1)}>NEXT</button>
				{count === 0 && <button onClick={() => createTitle()}>TITLE</button>}
			</div>
			<h2 className=" prosessing">{count !== 0 && title}</h2>

			<div className="display-slide">
				<h2 className="title">{count === 0 && title}</h2>
				<img
					src={url}
					className="slide-img"
					alt="slide-image via urlstate"
					height={"500px"}
				/>
			</div>
		</section>
	);
}

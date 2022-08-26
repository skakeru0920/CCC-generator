import { useEffect } from "react";
import axios from "axios";

import Slide from "./components/Slide";

let img =
	"http://images.unsplash.com/photo-1660167941111-f7ccce818728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTQ4MDYxNQ&ixlib=rb-1.2.1&q=80&w=1080";

const fetchImg = async () => {
	const img = (await axios.get("/img")).data.image_url;

	return img;
};
// async function getData() {
// 	const img = (await axios.get("/img")).data;
// 	const imgUrl = img.image_url;
// 	console.log(imgUrl, "app.js 6 ");
// 	return imgUrl;
// }

function App() {
	useEffect(() => {
		img = fetchImg();
	}, []);
	return (
		<div className="App">
			<header className="App-header">
			
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<body>
				<Slide />
			</body>
		</div>
	);
}

export default App;

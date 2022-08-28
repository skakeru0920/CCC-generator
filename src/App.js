import { useEffect } from "react";
import axios from "axios";

import Slide from "./components/Slide";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					<h1>CCC-Generator</h1>
				</p>
			</header>
			<body>
				<Slide />
			</body>
		</div>
	);
}

export default App;

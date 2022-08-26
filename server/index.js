require("dotenv").config();
const express = require("express");
const axios = require("axios");
const db = require("./knex");

const PORT = process.env.PORT || 9000;
const IMAGES = "images";
const app = express();

app.use(express.json());

app.get("/img", async (req, res) => {
	const img = await db.select().from(IMAGES).where({ id: 1 });
	res.send(img);
});

app.get("/random", async (req, res) => {
	const randomImg = await axios
		.get("https://source.unsplash.com/random")
		.then((res) => res.request.res.responseUrl);
	console.log(randomImg, "RANOM IMGAEW");
	res.send(randomImg);
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});

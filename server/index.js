require("dotenv").config();
const express = require("express");
const axios = require("axios");
const db = require("./knex");
const path = require("path");

const PORT = process.env.PORT || 9000;
const IMAGES = "images";
const app = express();

(async () => {
	try {
		console.log("Running migrations...");
		await db.migrate.latest();

		console.log("Starting express...");

		app.listen(PORT, () => {
			console.log(`App listening on port ${PORT}`);
		});
	} catch (err) {
		console.error("Error starting app!", err);
		process.exit(-1);
	}
})();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/img", async (req, res) => {
	const count = (await db(IMAGES).count("id").first()).count;
	const target = Math.floor(Math.random() * Number(count)) + 1;
	const img = await db.select().from(IMAGES).where({ id: target }).first();
	console.log("server img was calling", img);
	res.json(img);
});

app.get("/img/:id", async (req, res) => {
	const target = req.params.id;
	const img = await db.select().from(IMAGES).where({ id: target }).first();
	console.log(target, "ta-getyto");
	res.json(img);
});

app.get("/random", async (req, res) => {
	const randomImg = await axios
		.get("https://source.unsplash.com/random")
		.then((res) => res.request.res.responseUrl);
	await db(IMAGES).insert({ image_url: randomImg });
	console.log(randomImg, "RANOM IMGAEW");
	res.json(randomImg);
});

import express from "express";

const PORT = process.env.PORT || 9000;
const app: express.Express = express();
app.get("/", (req: express.Request, res: express.Response) => {
	res.send("こんにちは");
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});

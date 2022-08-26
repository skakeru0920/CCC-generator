// Update with your config settings.
require("dotenv").config({ path: "./.env.local" });

module.exports = {
	client: "pg",
	connection:
		process.env.DATABASE_URL ||
		`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:5432/ccc_gene`,
	searchPath: "public",
	migrations: { directory: "./migrations" },
};

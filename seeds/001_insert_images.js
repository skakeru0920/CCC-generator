/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("images").del();
	await knex("images").insert([
		{
			id: 1,
			image_url:
				"https://images.unsplash.com/photo-1660167941111-f7ccce818728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTQ4MDYxNQ&ixlib=rb-1.2.1&q=80&w=1080",
		},
		{
			id: 2,
			image_url:
				"https://images.unsplash.com/photo-1659458388439-c08fd1d32695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTQ4MDc2Mw&ixlib=rb-1.2.1&q=80&w=1080",
		},
		{
			id: 3,
			image_url:
				"https://images.unsplash.com/photo-1660891149845-164ef230d724?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTQ4MDc4Mg&ixlib=rb-1.2.1&q=80&w=1080",
		},
		{
			id: 4,
			image_url:
				"https://images.unsplash.com/photo-1660322194788-b163a9a5afb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTQ4MDgzMQ&ixlib=rb-1.2.1&q=80&w=1080",
		},
		{
			id: 5,
			image_url:
				"https://images.unsplash.com/photo-1661030259336-6fae4251997c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MTQ4MDgyOA&ixlib=rb-1.2.1&q=80&w=1080",
		},
	]);
};

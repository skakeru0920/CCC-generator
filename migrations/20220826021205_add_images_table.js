/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("images", (table) => {
		table.increments().index();
		table.text("image_url");
		table.string("grade", 16);
		table.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("images");
};

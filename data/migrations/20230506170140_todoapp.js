/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("Gorevler", (table) => {
      table.increments("GorevId");
      table.string("Adi").notNullable();
      table.string("Aciklama");
    })
    .createTable("Tasklar", (table) => {
      table.increments("TaskId");
      table.string("Adi").notNullable();
      table.string("Aciklama");
      table.dateTime("Tarih").defaultTo(knex.fn.now());
      table.integer("GorevId").references("GorevId").inTable("Gorevler");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Tasklar").dropTableIfExists("Gorevler");
};

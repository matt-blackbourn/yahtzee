
exports.up = function(knex) {
  return knex.schema.createTable('scores', table => {
   table.increments('id')
   table.number('ones')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('scores')
}

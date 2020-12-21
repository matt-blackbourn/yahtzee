
exports.up = function(knex) {
  return knex.schema.createTable('scores', table => {
   table.increments('id')
   table.string('username')
   table.integer('ones')
   table.integer('twos')
   table.integer('threes')
   table.integer('fours')
   table.integer('fives')
   table.integer('sixes')
   table.integer('total')
   table.integer('bonus')
   table.integer('upperTotal')
   table.integer('threeOfKind')
   table.integer('fourOfKind')
   table.integer('fullHouse')
   table.integer('smStraight')
   table.integer('lgStraight')
   table.integer('yahtzee')
   table.integer('chance')
   table.integer('bonusYahtzee')
   table.integer('lowerTotal')
   table.integer('grandTotal')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('scores')
}

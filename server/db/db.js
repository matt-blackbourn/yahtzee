const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getScores(db = connection) {
   return db('scores').select().orderBy('grandTotal', 'desc')
}

function addScore(score, db = connection) {
   return db('scores').insert(score)
}

function getScoresCLI(db = connection) {
  return db('scores').select('id', 'name', 'grandTotal').orderBy('grandTotal', 'desc')
}

function deleteScoreCLI(id, db = connection) {
  return db('scores').delete().where('id', id)
}

module.exports = {
   getScores,
   addScore,
   getScoresCLI,
   deleteScoreCLI
}
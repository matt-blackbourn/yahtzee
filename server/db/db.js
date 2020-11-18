const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getScores(db = connection) {
   return db('scores').select()
}

function getOneScore(id, db = connection) {
   return db('scores').select().where('id', id).first()
}

module.exports = {
   getScores,
   getOneScore
}
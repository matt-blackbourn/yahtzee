const connection = require('./connection')

function getScores(db = connection) {
   return db('scores').select().orderBy('grandTotal', 'desc')
}

function addScore(score, db = connection) {
   return db('scores').insert(score)
}

module.exports = {
   getScores,
   addScore
}
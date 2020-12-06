const connection = require('./connection')

function getScores(db = connection) {
  return db('scores').select('id', 'name', 'grandTotal').orderBy('grandTotal', 'desc')
}

function deleteScore(id, db = connection) {
  return db('scores').delete().where('id', id)
}

function updateScore(id, name, db = connection) {
  return db('scores').update(name).where('id', id)
}

module.exports = {
   getScores,
   deleteScore,
   updateScore
}
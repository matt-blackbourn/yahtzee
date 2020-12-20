const connection = require('./connection')
const { generateHash } = require('../auth/hash')

function addUser({ username, password }, db = connection){
  return generateHash(password)
    .then(hash => {
      return db('users').insert({username, hash})
    })
}

function getUsername(id, db = connection){
  return db('users').select('username').where('id', id)
}

module.exports = {
  addUser,
  getUsername
}
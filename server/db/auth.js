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

function checkUserExists(user, db = connection){
  return db('users').count('username as count').where('username', user.username)
    .then(res => res[0].count > 0)
}

module.exports = {
  addUser,
  getUsername,
  checkUserExists
}
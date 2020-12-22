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

function checkPassword(user, db = connection){
  return generateHash(user.password)
    .then(hash => {
      console.log(hash) //this hash is not the same? test again.
      return db('users')
        .select()
        .where('username', user.username)
        .where('hash', hash)
        .first()
    })
}

module.exports = {
  addUser,
  getUsername,
  checkUserExists,
  checkPassword
}
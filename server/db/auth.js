const connection = require('./connection')
const { generateHash } = require('../auth/hash')

function addUser({ username, password }, db = connection){
  return generateHash(password)
    .then(hash => {
      return db('users').insert({username, hash})
    })
}

module.exports = {
  addUser,
}
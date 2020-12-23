const connection = require('./connection')
const bcrypt = require('bcrypt')
const saltRounds = 10

function addUser({ username, password }, db = connection){
  return bcrypt.hash(password, saltRounds)
    .then(hash => {
      return db('users').insert({ username, hash }, 'id')
    })
}

function getUsername(id, db = connection){
  return db('users').select('username').where('id', id).first()
}

function checkUserExists(user, db = connection){
  return db('users').count('username as count').where('username', user.username)
    .then(res => res[0].count > 0)
}

function checkPassword(user, db = connection){
  let id
  return db('users').select('hash', 'id').where('username', user.username).first()
    .then(res => {
      id = res.id
      return bcrypt.compare(user.password, res.hash)
    })
    .then(passwordMatch => {
      if(passwordMatch){
        return id
      } else {
        return false
      }
    })
}


module.exports = {
  addUser,
  getUsername,
  checkUserExists,
  checkPassword
}
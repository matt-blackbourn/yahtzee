const express = require('express')
const router = express.Router()
const db = require('../db/auth')
const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt') //creates middleware function to take JWT out of req header, decode it and return a req.user object with id

router.get('/user', verifyJwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']}), getUser)
router.post('/login', login)
router.post('/register', register)

function getUser(req, res){
  return db.getUsername(req.user.id)
    .then(user => {
      res.json({ ok: true, username: user.username })
    })
    .catch(error => res.status(500).json(error))
}

function createToken (id) {
  return jwt.sign({id}, process.env.JWT_SECRET)
}

function login (req, res) {
  return db.checkUserExists(req.body)
    .then(userExists => {
      if(userExists){
        return db.checkPassword(req.body)
      } else {
        return false
      }
    })
    .then(id => {
      if(id){
        res.json({
          ok: true,
          message: 'User logged in',
          token: createToken(id),
          username: req.body.username
        })
      } else {
        res.json({ ok: false, message: 'invalid user credentials' })
      }
    })
    .catch(error => res.status(500).json(error))
}

function register(req, res){
  return db.addUser(req.body)
    .then(([id]) => {
    res.json({
      ok: true,
      message: 'Authentication successful',
      token: createToken(id),
      username: req.body.username
    })
  })
  .catch(error => {
    if(error.errno == 19){
      res.status(400).json({ok: false, message: 'username already exists'})
    } else {
      res.status(500).json({ok: false, message: 'something went wrong'})
    }
  })
}

module.exports = router
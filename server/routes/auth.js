const express = require('express')
const router = express.Router()
const db = require('../db/auth')
const jwt = require('jsonwebtoken')

//creates middleware function to take JWT out of req header, decode it and return a req.user object with id
const verifyJwt = require('express-jwt') 

router.post('/register', register)

function createToken (id) {
  return jwt.sign({id}, process.env.JWT_SECRET)
}

// jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '1d'})

function register(req, res){
  db.addUser(req.body)
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

router.get('/user', verifyJwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']}), getUser)

function getUser(req, res){
  db.getUsername(req.user.id)
    .then(user => {
      res.json({ok: true, username: user[0].username})
    })
    .catch(error => res.status(500).json(error))
}

module.exports = router
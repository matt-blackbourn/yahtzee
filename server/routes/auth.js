const express = require('express')
const router = express.Router()
const db = require('../db/auth')
const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt') //creates middleware function to take JWT out of req header, decode it and return a req.user object with id

router.post('/register', register)
router.get('/user', verifyJwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']}), getUser)
router.post('/login', login)

function login (req, res) {
  db.checkUserExists(req.body)
    // .then(exists => {
    //   if(exists){
    //     return db.checkPassword(req.body)
    //       .then(username => res.json(username))
    //   } else {
    //     return res.json({ ok: false, message: 'username does not exist' })
    //   }
    // })
    .then(() => db.checkPassword(req.body))
    .then((user) => res.json(user))
    .catch(error => res.status(500).json(error))
}

function createToken (id) {
  return jwt.sign({id}, process.env.JWT_SECRET)
}

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


function getUser(req, res){
  db.getUsername(req.user.id)
    .then(user => {
      res.json({ok: true, username: user[0].username})
    })
    .catch(error => res.status(500).json(error))
}

module.exports = router
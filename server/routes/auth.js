const express = require('express')
const router = express.Router()
const db = require('../db/auth')
const token = require('../auth/token')
const verifyJwt = require('express-jwt') //creates middleware function to take JWT out of header, decode decode it and return a req.user object

router.post('/register', register, token.issue)

function register(req, res, next){
  db.addUser(req.body)
  .then(([id]) => {
    res.locals.userId = id
    next()
  })
  .catch(error => {
    if(error.errno == 19){
      res.status(400).json({ok: false, message: 'username already exists'})
    } else {
      res.status(500).json({ok: false, message: 'something went wrong'})
    }
  })
}

router.get('/user', verifyJwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']}), getUserId)

function getUserId(req, res){
  db.getUsername(req.user.id)
    .then(user => {
      res.json({ok: true, username: user[0].username})
    })
    .catch(error => res.status(500).json(error))
}

module.exports = router
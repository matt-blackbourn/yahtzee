const express = require('express')
const router = express.Router()
const db = require('../db/auth')
const token = require('../auth/token')

//creates middleware function to take JWT out of req header, decode it and return a req.user object with id
const verifyJwt = require('express-jwt') 

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

router.get('/user', verifyJwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']}), getUser)

function getUser(req, res){
  db.getUsername(req.user.id)
    .then(user => {
      res.json({ok: true, username: user[0].username})
    })
    .catch(error => res.status(500).json(error))
}

module.exports = router
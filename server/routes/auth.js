const express = require('express')
const router = express.Router()
const db = require('../db/auth')
const token = require('../auth/token')

router.post('/register', register, token.issue)

function register(req, res, next){
  db.addUser(req.body)
    .then(([id]) => {
      res.locals.userId = id
      next()
    })
    .catch(error => {
      if(error.errno == 19){
        res.status(400).json({ok: false, message: 'username taken'})
      } else {
        res.status(500).json({ok: false, message: 'something went wrong'})
      }
    })
}


module.exports = router
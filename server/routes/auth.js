const express = require('express')
const router = express.Router()
const db = require('../db/auth')

router.post('/register', register)

function register(req, res){
  db.addUser(req.body)
    .then(ids => {
      res.status(201).json({ok: true})
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
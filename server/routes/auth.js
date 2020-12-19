const express = require('express')
const router = express.Router()
const db = require('../db/auth')

router.post('/register', register)

function register(req, res){
  const {username, password} = req.body
  db.addUser(req.body)
    .then(ids => {
      res.send(`${username} has been added with id: ${ids[0]}`)
    })
}


module.exports = router
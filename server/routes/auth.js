const express = require('express')
const router = express.Router()

router.post('/register', register)

function register(req, res){
  const {username, password} = req.body
  res.send(`your name is ${username} and your password is ${password}`)
}


module.exports = router
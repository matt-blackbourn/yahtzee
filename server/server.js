const path = require('path')
const express = require('express')
const server = express()

const scoresRoutes = require('./routes/scores')
const cliRoutes = require('./routes/cli')
const authRoutes = require('./routes/auth')

server.use(express.json()) 
server.use(express.static(path.join(__dirname, './public'))) 

server.use('/api/scores', scoresRoutes)
server.use('/cli', cliRoutes)
server.use('/api/auth', authRoutes)

//for express-jwt middleware error handling
server.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ok: false, message: 'invalid token...'})
  }
})

module.exports = server

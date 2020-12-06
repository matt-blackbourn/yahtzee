const path = require('path')
const express = require('express')
const server = express()

const scoresRoutes = require('./routes/scores')
const cliRoutes = require('./routes/cli')

server.use(express.json()) 
server.use(express.static(path.join(__dirname, './public'))) 

server.use('/api/scores', scoresRoutes)
server.use('/cli', cliRoutes)

module.exports = server

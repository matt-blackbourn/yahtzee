const path = require('path')
const express = require('express')

const server = express()
const scoresRoutes = require('./routes/scores')

server.use(express.json()) 
server.use(express.static(path.join(__dirname, './public'))) 

server.use('/api/scores', scoresRoutes)

module.exports = server

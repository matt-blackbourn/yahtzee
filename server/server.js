const path = require('path')
const express = require('express')

const server = express()
// const insult = require('./routes/insults')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// server.use('/api', insult)


module.exports = server

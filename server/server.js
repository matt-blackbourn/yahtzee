const path = require('path')
const express = require('express')

const server = express()
const scoresRoutes = require('./routes/scores')

server.use(express.json()) //because we have json data in the body of requests and responses, need it to parse it and put it in the req.body. dont need url encoded as not using form submissions, all api based

server.use(express.static(path.join(__dirname, './public'))) //because public is now in the server folder, this tells the middleware where to find it

server.use('/api/scores', scoresRoutes)


module.exports = server

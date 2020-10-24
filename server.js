const express = require('express')
const server = express()

server.use(express.static(__dirname + '/public'))

server.get('/', (req, res) => {
   res.render('index')
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
   console.log('server listening on port: ', PORT)
})


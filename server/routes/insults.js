const express = require('express')
const router = express.Router()
const request = require('superagent')

const insultURL = 'https://insult.mattbas.org/api/insult.json?who='

const db = require('../db/db.js')


//RECIEVES CALL FROM OUR FRONT END, CALLS EXTERNAL API, SENDS RESPONSE BACK TO OUR FRONT END & ADDS TO DATABASE
// router.get('/insult/:name', (req, res) => {
//     const name = req.params.name
//     let insult
//     return request
//       .get(insultURL + name)
//       .then(response => {
//         insult = JSON.parse(response.text).insult
//         // console.log(insult)
//         return db.addInsult(insult)
//     })
//     .then(()=> {
//         res.json(insult)
//     })
//     .catch(err => {
//       res.json({message: err})
//     }) 
// })



module.exports = router
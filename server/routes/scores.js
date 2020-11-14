const express = require('express')
const router = express.Router()
const request = require('superagent')


const db = require('../db/scores.js')


// router.getScores('/', (req, res) => {


//    // .catch(err => {
//    // console.log(err)
//    //    res.status(500).json({message: 'something broke'})
//    // })
// })

// router.getScores('/:id', (req, res) => {


//    // .catch(err => {
//    // console.log(err)
//    //    res.status(500).json({message: 'something broke'})
//    // })
// })



module.exports = router
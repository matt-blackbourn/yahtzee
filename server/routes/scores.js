const express = require('express')
const router = express.Router()

const db = require('../db/scores')

router.get('/', (req, res) => {
   return db.getScores()
      .then(scores => {
         res.json(scores)
      })
      .catch(err => {
      console.log(err)
      res.status(500).json({message: 'something broke'})
   })
})

router.post('/', (req, res) => {
   const score = req.body
   return db.addScore(score)
    .then(() => db.getScores())
    .then((scores) => res.json(scores))
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'something broke'})
    })
})

module.exports = router
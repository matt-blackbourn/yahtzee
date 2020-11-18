const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

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

router.get('/:id', (req, res) => {
   id = req.params.id
   return db.getOneScore(id)
      .then(score => {
         res.json(score)
      })
      .catch(err => {
         console.log(err)
         res.status(500).json({message: 'something broke'})
      })
})

module.exports = router
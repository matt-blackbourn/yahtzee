const express = require('express')
const router = express.Router()

const db = require('../db/db')

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

//CLI routes

router.get('/cli', (req, res) => {
  return db.getScoresCLI()
     .then(scores => {
        res.json(scores)
     })
     .catch(err => {
     console.log(err)
     res.status(500).json({message: 'something broke'})
  })
})

router.delete('/cli/:id', (req, res) => {
  return db.deleteScoreCLI(req.params.id)
     .then(() => {
        res.json({message: `record ${req.params.id} deleted`})
     })
     .catch(err => {
     console.log(err)
     res.status(500).json({message: 'something broke'})
  })
})

module.exports = router
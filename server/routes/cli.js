const express = require('express')
const router = express.Router()
const db = require('../db/cli')


router.get('/', (req, res) => {
  return db.getScores()
     .then(scores => res.json(scores))
     .catch(err => {
      console.log(err)
      res.status(500).json({message: 'something broke'})
  })
})

router.delete('/:id', (req, res) => {
  return db.deleteScore(req.params.id)
     .then(() => res.json({message: `score ${req.params.id} deleted`}))
     .catch(err => {
      console.log(err)
      res.status(500).json({message: 'something broke'})
  })
})

router.patch('/:id', (req, res) => {
  return db.updateScore(req.params.id, req.body)
     .then(() => res.json({message: `score ${req.params.id} name updated to ${req.body.name}`}))
     .catch(err => {
      console.log(err)
      res.status(500).json({message: 'something broke'})
  })
})

module.exports = router
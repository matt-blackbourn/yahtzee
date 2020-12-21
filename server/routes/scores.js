const express = require('express')
const router = express.Router()
const verifyJwt = require('express-jwt') 

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

router.post('/', verifyJwt({secret: process.env.JWT_SECRET, algorithms: ['HS256']}), postScore)

function postScore (req, res){
  const score = req.body
  return db.addScore(score)
   .then(() => db.getScores())
   .then((scores) => res.json(scores))
   .catch(error => {
       console.log(error)
       res.status(500).json({message: 'something broke'})
   })
}

module.exports = router


// const h = {
//   "ones": 0,
//   "twos": 0,
//   "threes": 0,
//   "fours": 0,
//   "fives": 0,
//   "sixes": 0,
//   "total": 0,
//   "bonus": 0,
//   "upperTotal": 0,
//   "threeOfKind": 0,
//   "fourOfKind": 0,
//   "fullHouse": 0,
//   "smStraight": 0,
//   "lgStraight": 0,
//   "yahtzee": 0,
//   "chance": 0,
//   "bonusYahtzee": 0,
//   "lowerTotal": 0,
//   "grandTotal": 0,
//   "username": "hello"
// }
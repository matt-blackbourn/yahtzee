import { rollScored } from "../actions"

export const calculateScore = (event, props) => {
  let score = 0
  let button = ''
  switch(event.target.id){
    case 'Ones':
      score = props.tempHash['1']
      button = 'ones'
      break
    case 'Twos':
      score = 2 * props.tempHash['2']
      button = 'twos'
      break
    case 'Threes':
      score = 3 * props.tempHash['3']
      button = 'threes'
      break
    case 'Fours':
      score = 4 * props.tempHash['4']
      button = 'fours'
      break
    case 'Fives':
      score = 5 * props.tempHash['5']
      button = 'fives'
      break
    case 'Sixes':
      score = 6 * props.tempHash['6']
      button = 'sixes'
      break
    case '3 of kind':
      score = sumAllDice(props.dice)
      button = 'threeOfKind'
      break
    case '4 of kind':
      score = sumAllDice(props.dice)
      button = 'fourOfKind'
      break
    case 'Full House':
      score = 25
      button = 'fullHouse'
      break
    case 'Small Straight':
      score = 30
      button = 'smStraight'
      break
    case 'Large Straight':
      score = 40
      button = 'lgStraight'
      break
    case 'Yahtzee':
      score = 50
      button = 'yahtzee'
      break
    case 'Chance':
    default:
      score = sumAllDice(props.dice)
      button = 'chance'
      break
  }
  props.dispatch(rollScored(button, score))
}

const sumAllDice = dice => {
  let total = 0
    for(let i = 0; i < dice.length; i++){
      total += dice[i].value
    }
    return total
}

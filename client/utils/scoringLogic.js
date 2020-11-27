import { rollScored } from "../actions"

export const calculateScore = (event, props) => {
  let score = 0
  switch(event.target.id){
    case 'Ones':
      score = props.tempHash['1']
      break
    case 'Twos':
      score = 2 * props.tempHash['2']
      break
    case 'Threes':
      score = 3 * props.tempHash['3']
      break
    case 'Fours':
      score = 4 * props.tempHash['4']
      break
    case 'Fives':
      score = 5 * props.tempHash['5']
      break
    case 'Sixes':
      score = 6 * props.tempHash['6']
      break
    case '3 of kind':
      score = sumAllDice(props.dice)
      break
    case '4 of kind':
      score = sumAllDice(props.dice)
      break
    case 'Full House':
      score= 25
      break
    case 'Small Straight':
      score= 30
      break
    case 'Large Straight':
      score = 40
      break
    case 'Yahtzee':
      score = 50
      break
    case 'Chance':
      score = sumAllDice(props.dice)
      break
  }
  props.dispatch(rollScored(score))
}

const sumAllDice = dice => {
  let total = 0
    for(let i = 0; i < dice.length; i++){
      total += dice[i].value
    }
    return total
}

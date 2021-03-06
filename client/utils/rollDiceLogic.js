import { buildHash, rollDice, scoringButtonsEnabled, scoreBonusYahtzee, holdDice } from "../actions"
import { map } from "./cutScore"

export const keepDice = (index, props) => {
  if(props.rollsRemaining < 3){
    let newState = [...props.dice]
    if(props.dice[index].keep){
       newState[index].keep = false
       newState[index].class = ''
    } else {
       newState[index].keep = true
       newState[index].class = 'keep'
    }
    props.dispatch(holdDice(newState))
  }
}

export const rollAvailableDice = (props) => {
  let newDice = [...props.dice]
  for (let i = 0; i < props.dice.length; i++) {
    if (!props.dice[i].keep) {
      newDice[i].value = (Math.floor(Math.random() * 6) + 1)
    }
  }
  props.dispatch(rollDice(newDice))
  buildTempDiceHash(props)
}

export const buildTempDiceHash = props => {
  const tempDiceHash = {}
  for (let i = 0; i < 5; i++) {
    tempDiceHash[props.dice[i].value] = (tempDiceHash[props.dice[i].value] || 0) + 1
  }
  props.dispatch(buildHash(tempDiceHash))
  checkPossibleScores(props, tempDiceHash)
}

export const checkPossibleScores = (props, tempHash) => {
  let availableScores = []

  //check for numbers
  for (let key of Object.keys(tempHash)) {
    switch (key) {
      case '1':
        if (!props.scoreCard.ones.scored) availableScores.push('Ones')
        break
      case '2':
        if (!props.scoreCard.twos.scored) availableScores.push('Twos')
        break
      case '3':
        if (!props.scoreCard.threes.scored) availableScores.push('Threes')
        break
      case '4':
        if (!props.scoreCard.fours.scored) availableScores.push('Fours')
        break
      case '5':
        if (!props.scoreCard.fives.scored) availableScores.push('Fives')
        break
      case '6':
      default:
        if (!props.scoreCard.sixes.scored) availableScores.push('Sixes')
        break
    }
  }

  //check for runs 
  for (let value of Object.values(tempHash)) {
    if (value >= 3 && !props.scoreCard.threeOfKind.scored) availableScores.push('3 of kind')
    if (value >= 4 && !props.scoreCard.fourOfKind.scored) availableScores.push('4 of kind')

    //check for full house
    if (
        value === 3 && 
        Object.entries(tempHash).length === 2 &&
        !props.scoreCard.fullHouse.scored
    ) availableScores.push('Full House')
  }

  //check for small straight
  let keys = Object.keys(tempHash)
  if (keys.length >= 4) {
    if (
      (keys[0] === '1' && keys[3] === '4') ||
      (keys[0] === '2' && keys[3] === '5') ||
      (keys[0] === '3' && keys[3] === '6') ||
      (keys[1] === '3' && keys[4] === '6')
    ) {
      if (!props.scoreCard.smStraight.scored) availableScores.push('Small Straight')
    }
  }

  //check for large straight
  if (keys.length === 5) {
    if (
      (keys[0] === '1' && keys[4] === '5') ||
      (keys[0] === '2' && keys[4] === '6')
    ) {
      if (!props.scoreCard.lgStraight.scored) availableScores.push('Large Straight')
    }
  }

  //check for chance
  if (!props.scoreCard.chance.scored) availableScores.push('Chance')

  //check for yahtzee - last due to modifying availableScores for bonus yahtzees
  for (let value of Object.values(tempHash)) {
    if (value === 5 ) {
      if(!props.scoreCard.yahtzee.scored){
        availableScores.push('Yahtzee')
      } else {
        props.dispatch(scoreBonusYahtzee())
        if(numberIsAvailable(availableScores)){
          let number = availableScores[0]
          availableScores = []
          availableScores.push(number)
        } else {
          const arr = Object.entries(props.scoreCard)
          for(let i = 9; i <= 15; i++){
            if(!arr[i][1].scored){
              availableScores.push(map[arr[i][0]])
            }
          }
        }
      }
    }
  }

  //dispatch final available scoring options
  props.dispatch(scoringButtonsEnabled(availableScores))
}

const numberIsAvailable = availableScores => {
  return availableScores.some(score => ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes'].includes(score))
}

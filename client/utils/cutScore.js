import { disallowCutScores, allowCutScores } from "../actions"

const map = {
  ones: 'Ones',
  twos: 'Twos',
  threes: 'Threes',
  fours: 'Fours',
  fives: 'Fives',
  sixes: 'Sixes',
  threeOfKind: '3 of kind',
  fourOfKind: '4 of kind',
  fullHouse: 'Full House',
  smStraight: 'Small Straight',
  lgStraight: 'Large Straight',
  yahtzee: 'Yahtzee',
  chance: 'Chance',
}

export const toggleCutScore = props => {
  if(props.cutScoresAllowed){
    props.dispatch(disallowCutScores())
  } else {
    props.dispatch(allowCutScores())
  }
}

export const buildCutScoresArray = props => {
  let scores = []
  let arr = Object.entries(props.scoreCard)
  for(let i = 0; i < 6; i++){
    if(!arr[i][1].scored){
      scores.push(map[arr[i][0]])
    }
  }
  for(let i = 9; i <= 15; i++){
    if(!arr[i][1].scored){
      scores.push(map[arr[i][0]])
    }
  }
  return scores
}



export const getClass = (props, name, section) => {
  if(props.cutScoresAllowed && props.scoresAvailableToCut.includes(name)){
    return 'cutScore'
  } else {
    if(props.availableScores.includes(name)){
      return section
    } else {
      return ''
    }
  }
}

export const enableButton = (props, name) => {
  if(props.cutScoresAllowed){
    if(props.scoresAvailableToCut.includes(name)){
      return false
    } else {
      return true
    }
  } else {
    if(props.availableScores.includes(name)){
      return false
    } else {
      return true
    }
  }
}


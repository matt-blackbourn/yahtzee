import { SCORECARD_UPDATED } from "../actions"

const initialState = {
  ones: {scored: false, value: -1},
  twos: {scored: false, value: -1},
  threes: {scored: false, value: -1},
  fours: {scored: false, value: -1},
  fives: {scored: false, value: -1},
  sixes: {scored: false, value: -1},
  total: {scored: false, value: -1},
  bonus: {scored: false, value: -1},
  upperTotal: {scored: false, value: -1},
  threeOfKind: {scored: false, value: -1},
  fourOfKind: {scored: false, value: -1},
  fullHouse: {scored: false, value: -1},
  smStraight: {scored: false, value: -1},
  lgStraight: {scored: false, value: -1},
  yahtzee: {scored: false, value: -1},
  chance: {scored: false, value: -1},
  bonusYahtzee: {scored: false, value: -1},
  lowerTotal: {scored: false, value: -1},
  grandTotal: {scored: false, value: -1}
}

function reducer(state = initialState, action){
  switch(action.type){
    case SCORECARD_UPDATED:
      let newState = {...state}
      newState[action.key].value = action.value
      newState[action.key].scored = true
      return newState
    default: 
      return state
  }
}

export default reducer
import { SCORECARD_UPDATED } from "../actions"

const initialState = {
  ones: {scored: false, value: 0},
  twos: {scored: false, value: 0},
  threes: {scored: false, value: 0},
  fours: {scored: false, value: 0},
  fives: {scored: false, value: 0},
  sixes: {scored: false, value: 0},
  // total: {scored: false, value: 0},
  // bonus: {scored: false, value: 0},
  // upperTotal: {scored: false, value: 0},
  threeOfKind: {scored: false, value: 0},
  fourOfKind: {scored: false, value: 0},
  fullHouse: {scored: false, value: 0},
  smStraight: {scored: false, value: 0},
  lgStraight: {scored: false, value: 0},
  yahtzee: {scored: false, value: 0},
  chance: {scored: false, value: 0},
  // bonusYahtzee: {scored: false, value: 0},
  // lowerTotal: {scored: false, value: 0},
  // grandTotal: {scored: false, value: 0}
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
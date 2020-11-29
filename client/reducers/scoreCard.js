import { SCORECARD_UPDATED, UPPER_TOTAL_UPDATED } from "../actions"

const initialState = {
  ones: {scored: false, value: 0},
  twos: {scored: false, value: 0},
  threes: {scored: false, value: 0},
  fours: {scored: false, value: 0},
  fives: {scored: false, value: 0},
  sixes: {scored: false, value: 0},
  total: {print: false, value: 0},
  bonus: {print: false, value: 0},
  upperTotal: {print: false, value: 0},
  threeOfKind: {scored: false, value: 0},
  fourOfKind: {scored: false, value: 0},
  fullHouse: {scored: false, value: 0},
  smStraight: {scored: false, value: 0},
  lgStraight: {scored: false, value: 0},
  yahtzee: {scored: false, value: 0},
  chance: {scored: false, value: 0},
  bonusYahtzee: {print: false, value: 0},
  lowerTotal: {print: false, value: 0},
  grandTotal: {print: false, value: 0}
}

function reducer(state = initialState, action){
  let newState
  switch(action.type){
    case SCORECARD_UPDATED:
      newState = {...state}
      newState[action.key].value = action.value
      newState[action.key].scored = true
      return newState

    case UPPER_TOTAL_UPDATED:
      newState = {...state}
      newState.total.print = action.print
      newState.total.value = action.value
      if(action.print){
        action.value >= 63 ? newState.bonus.value = 35 : newState.bonus.value = 0
        newState.bonus.print = true
        newState.upperTotal.print = true
        newState.upperTotal.value = newState.total.value + newState.bonus.value
      }
      return newState

    default: 
      return state
  }
}

export default reducer
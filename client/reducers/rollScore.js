import { SCORE_CALCULATED, TURN_ENDED } from "../actions"

const initialState = {
  button: '',
  score: 0
}

function reducer(state = initialState, action){
  switch(action.type){
    case SCORE_CALCULATED:
      return {
        button: action.button,
        score: action.score
      }
    case TURN_ENDED:
      return initialState
    default:
      return state
  }
}

export default reducer
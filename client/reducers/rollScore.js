import { SCORE_CALCULATED, RESET_ROLL_SCORE } from "../actions"

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
    case RESET_ROLL_SCORE:
      return initialState
    default:
      return state
  }
}

export default reducer
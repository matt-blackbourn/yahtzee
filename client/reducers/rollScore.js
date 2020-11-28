import { SCORE_CALCULATED } from "../actions"

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
    default:
      return state
  }
}

export default reducer
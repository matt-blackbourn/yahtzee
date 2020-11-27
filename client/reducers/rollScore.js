import { SCORE_CALCULATED } from "../actions"

function reducer(state = 0, action){
  switch(action.type){
    case SCORE_CALCULATED:
      return action.score
    default:
      return state
  }
}

export default reducer
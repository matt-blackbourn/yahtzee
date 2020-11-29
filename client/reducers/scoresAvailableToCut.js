import { POSSIBLE_CUT_SCORES_ADDED } from "../actions"

function reducer (state = [], action){
  switch(action.type){

    case POSSIBLE_CUT_SCORES_ADDED:
      return action.scores
      
    default: return state
  }
}

export default reducer
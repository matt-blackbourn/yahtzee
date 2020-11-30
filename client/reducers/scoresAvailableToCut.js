import { POSSIBLE_CUT_SCORES_ADDED, GAME_RESTARTED } from "../actions"

function reducer (state = [], action){
  switch(action.type){
    case POSSIBLE_CUT_SCORES_ADDED:
      return action.scores
      
    case GAME_RESTARTED:
      return []
      
    default: return state
  }
}

export default reducer
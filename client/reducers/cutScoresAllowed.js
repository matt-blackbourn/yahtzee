import { CUT_SCORES_ALLOWED, CUT_SCORES_DISALLOWED, GAME_RESTARTED } from "../actions"


function reducer(state = false, action){
  switch(action.type){
    case CUT_SCORES_ALLOWED:
      return true

    case CUT_SCORES_DISALLOWED:
      return false
      
    case GAME_RESTARTED:
      return false
      
    default: return state
  }
}

export default reducer
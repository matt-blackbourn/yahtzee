import { SHOW_FORM } from "../actions/highScores"
import { GAME_RESTARTED } from "../actions"

function reducer(state = false, action){
  switch(action.type){
    case SHOW_FORM:
      return true

    case GAME_RESTARTED:
      return false

    default: return state
  }
}

export default reducer
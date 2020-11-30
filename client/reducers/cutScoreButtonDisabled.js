import { CUT_SCORE_BUTTON_ENABLED, CUT_SCORE_BUTTON_DISABLED, GAME_RESTARTED } from "../actions"


function reducer(state = true, action) {
  switch (action.type) {
    case CUT_SCORE_BUTTON_ENABLED:
      return false

    case CUT_SCORE_BUTTON_DISABLED:
      return true

    case GAME_RESTARTED:
      return true
      
    default:
      return state
  }
}

export default reducer
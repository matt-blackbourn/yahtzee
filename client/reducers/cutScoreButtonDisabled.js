import { CUT_SCORE_BUTTON_ENABLED, CUT_SCORE_BUTTON_DISABLED } from "../actions"


function reducer(state = true, action) {
  switch (action.type) {
    case CUT_SCORE_BUTTON_ENABLED:
      return false
    case CUT_SCORE_BUTTON_DISABLED:
      return true
    default:
      return state
  }
}

export default reducer
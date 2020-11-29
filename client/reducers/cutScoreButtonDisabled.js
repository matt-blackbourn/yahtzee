import { CUT_ENABLED, CUT_DISABLED } from "../actions"


function reducer(state = true, action) {
  switch (action.type) {
    case CUT_ENABLED:
      return false
    case CUT_DISABLED:
      return true
    default:
      return state
  }
}

export default reducer
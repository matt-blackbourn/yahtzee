import { CONFIRM_ENABLED, TURN_ENDED } from "../actions"

function reducer(state = true, action) {
  switch (action.type) {
    case CONFIRM_ENABLED:
      return false
    case TURN_ENDED:
      return true
    default:
      return state
  }
}

export default reducer
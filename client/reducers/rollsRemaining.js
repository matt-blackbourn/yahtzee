import { ROLL_COUNT_REDUCED, TURN_ENDED } from "../actions"

function reducer(state = 3, action) {
  switch (action.type) {
    case ROLL_COUNT_REDUCED:
      return state - 1
    case TURN_ENDED:
      return 3
    default:
      return state
  }
}

export default reducer
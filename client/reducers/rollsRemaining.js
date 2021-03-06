import { ROLL_COUNT_REDUCED, RESET, GAME_RESTARTED } from "../actions"

function reducer(state = 3, action) {
  switch (action.type) {
    case ROLL_COUNT_REDUCED:
      return state - 1

    case RESET:
      return 3

    case GAME_RESTARTED:
      return 3
      
    default:
      return state
  }
}

export default reducer
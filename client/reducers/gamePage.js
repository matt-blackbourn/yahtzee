import { CHANGE_PAGE, GAME_RESTARTED } from '../actions'

function reducer(state = true, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return action.gamePageShowing

    case GAME_RESTARTED:
      return true

    default:
      return state
  }
}

export default reducer

import { SCORING_BUTTONS_ENABLED, RESET, GAME_RESTARTED } from '../actions'

function reducer(state = [], action){
   switch(action.type){
      case SCORING_BUTTONS_ENABLED:
        return action.buttons
        
      case RESET:
        return []

      case GAME_RESTARTED:
        return []

      default:
         return state
   }
}

export default reducer
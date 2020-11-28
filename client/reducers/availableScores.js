import { SCORING_BUTTONS_ENABLED, TURN_ENDED } from '../actions'

function reducer(state = [], action){
   switch(action.type){
      case SCORING_BUTTONS_ENABLED:
        return action.buttons
      case TURN_ENDED:
        return []
      default:
         return state
   }
}

export default reducer
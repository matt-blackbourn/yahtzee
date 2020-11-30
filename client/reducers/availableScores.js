import { SCORING_BUTTONS_ENABLED, RESET } from '../actions'

function reducer(state = [], action){
   switch(action.type){
      case SCORING_BUTTONS_ENABLED:
        return action.buttons
      case RESET:
        return []
      default:
         return state
   }
}

export default reducer
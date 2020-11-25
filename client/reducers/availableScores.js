import { SCORING_BUTTONS_ENABLED } from '../actions'


function reducer(state = [], action){
   switch(action.type){
      
      case SCORING_BUTTONS_ENABLED:
         return action.buttons

      default:
         return state
   }
}

export default reducer
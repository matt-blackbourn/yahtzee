import { REDUCE_ROLLS } from "../actions"

function reducer(state = 3, action){
   switch(action.type){
      case REDUCE_ROLLS:
         return action.rollsRemaining -1
      default:
         return state
   }
}

export default reducer
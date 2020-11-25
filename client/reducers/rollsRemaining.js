import { ROLL_COUNT_REDUCED } from "../actions"

function reducer(state = 3, action){
   switch(action.type){
      case ROLL_COUNT_REDUCED:
         return state-1
      default:
         return state
   }
}

export default reducer
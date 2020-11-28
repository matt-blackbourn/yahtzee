import { TEMP_DICE_HASH_BUILT, TURN_ENDED } from "../actions"


function reducer(state = {}, action){
   switch(action.type){
      case TEMP_DICE_HASH_BUILT:
         return action.hash
      case TURN_ENDED:
        return {}
      default:
         return state
   }
}

export default reducer


import { TEMP_DICE_HASH_BUILT, RESET } from "../actions"


function reducer(state = {}, action){
   switch(action.type){
      case TEMP_DICE_HASH_BUILT:
         return action.hash
      case RESET:
        return {}
      default:
         return state
   }
}

export default reducer


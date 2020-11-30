import { TEMP_DICE_HASH_BUILT, RESET, GAME_RESTARTED } from "../actions"

function reducer(state = {}, action){
   switch(action.type){
      case TEMP_DICE_HASH_BUILT:
         return action.hash

      case RESET:
        return {}

      case GAME_RESTARTED:
        return {}

      default:
         return state
   }
}

export default reducer


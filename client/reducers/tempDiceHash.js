import { TEMP_DICE_HASH_BUILT } from "../actions"


const initialState = {}


function reducer(state = initialState, action){
   switch(action.type){
      case TEMP_DICE_HASH_BUILT:
         return action.hash
      default:
         return state
   }
}

export default reducer


import { BUILD_HASH } from "../actions"


const initialState = {}


function reducer(state = initialState, action){
   switch(action.type){
      case BUILD_HASH:
         return action.hash
      default:
         return state
   }
}

export default reducer
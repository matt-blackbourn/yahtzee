import { CHANGE_PAGE } from '../actions'

function reducer(state = true, action){
   switch(action.type){
      case CHANGE_PAGE:
         return action.gamePageShowing
      default:
         return state
   }
}

export default reducer

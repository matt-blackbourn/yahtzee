import { CHANGE_PAGE } from '../actions'

function currentPage(state = true, action){
   switch(action.type){
      case CHANGE_PAGE:
         return action.gamePageShowing
      default:
         return state
   }
}

export default currentPage

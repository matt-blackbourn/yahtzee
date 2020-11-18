import { GET_HIGHSCORES } from '../actions'

function reducer(state = [], action){
   switch(action.type){
      case GET_HIGHSCORES:
         return action.scores
      default:
         return state
   }
}

export default reducer
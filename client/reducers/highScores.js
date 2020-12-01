import { SET_HIGHSCORES } from '../actions/highScores'

function reducer(state = [], action){
   switch(action.type){
      case SET_HIGHSCORES:
         return action.scores
      default:
         return state
   }
}

export default reducer
import { SET_HIGHSCORES, ADDED_SCORE_TO_HIGHSCORES } from '../actions/highScores'

function reducer(state = [], action){
   switch(action.type){
      case SET_HIGHSCORES:
         return action.scores

      case ADDED_SCORE_TO_HIGHSCORES:
        return [...state, action.newScore]

      default:
         return state
   }
}

export default reducer
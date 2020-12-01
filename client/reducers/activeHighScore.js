import { HIGHSCORE_UPDATED } from "../actions/highScores"

function reducer (state = null, action){
  switch(action.type){
    case HIGHSCORE_UPDATED:
      return action.score

    default:
      return state
  }
}

export default reducer
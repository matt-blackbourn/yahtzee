import { ROLL_SCORED } from "../actions"

function reducer(state = 0, action){
  switch(action.type){
    case ROLL_SCORED:
      return action.score
    default:
      return state
  }
}

export default reducer
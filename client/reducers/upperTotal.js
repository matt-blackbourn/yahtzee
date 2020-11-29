import { UPPER_TOTAL_UPDATED } from "../actions"

function reducer(state = 0, action){
  switch(action.type){
    case UPPER_TOTAL_UPDATED:
      return action.total
    default:
      return state
  }
}

export default reducer
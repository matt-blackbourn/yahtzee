import { ACTIVE_USER_SET } from "../actions/auth"

function reducer (state = '', action){
  switch(action.type){
    case ACTIVE_USER_SET:
      return action.name
    default:
      return state
  }
}

export default reducer
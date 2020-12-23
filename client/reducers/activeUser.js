import { ACTIVE_USER_SET, ACTIVE_USER_REMOVED } from "../actions/auth"

function reducer (state = '', action){
  switch(action.type){
    case ACTIVE_USER_SET:
      return action.name

    case ACTIVE_USER_REMOVED:
      return ''
      
    default:
      return state
  }
}

export default reducer
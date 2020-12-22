import { TOGGLED_REGISTER_FORM } from "../actions"

function reducer(state = false, action){
  switch(action.type){
    case TOGGLED_REGISTER_FORM:
      return state ? false : true
      
    default:
      return state
  }
}

export default reducer
import { UPPER_TOTAL_UPDATED } from "../actions"
const initialState = {print: false, total: 0}

function reducer(state = initialState, action){
  switch(action.type){
    case UPPER_TOTAL_UPDATED:
      return {
        print: action.print,
        total: action.total
      }
    default:
      return state
  }
}

export default reducer
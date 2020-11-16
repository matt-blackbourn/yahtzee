import { combineReducers } from 'redux'

const initialState = []

function something(state = initialState, action){
   return state
}

export default combineReducers({
   something,
})
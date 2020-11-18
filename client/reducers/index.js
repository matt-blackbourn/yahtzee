import { combineReducers } from 'redux'

import gamePage from './gamePage'
import highScores from './highScores'


export default combineReducers({
   gamePage,
   highScores
})
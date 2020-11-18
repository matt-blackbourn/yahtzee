import { combineReducers } from 'redux'

import gamePage from './gamePage'
import highScores from './highScores'
import diceArray from './diceArray'


export default combineReducers({
   gamePage,
   highScores,
   diceArray,
})
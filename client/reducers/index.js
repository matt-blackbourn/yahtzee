import { combineReducers } from 'redux'

import gamePage from './gamePage'
import highScores from './highScores'
import dice from './dice'
import rollsRemaining from './rollsRemaining'


export default combineReducers({
   gamePage,
   highScores,
   dice,
   rollsRemaining,
   
})
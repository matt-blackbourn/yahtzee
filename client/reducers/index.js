import { combineReducers } from 'redux'

import gamePage from './gamePage'
import highScores from './highScores'
import dice from './dice'
import rollsRemaining from './rollsRemaining'
import tempDiceHash from './tempDiceHash'


export default combineReducers({
   gamePage,
   highScores,
   dice,
   rollsRemaining,
   tempDiceHash,
   
})
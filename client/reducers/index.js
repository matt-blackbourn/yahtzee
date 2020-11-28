import { combineReducers } from 'redux'

import gamePage from './gamePage'
import highScores from './highScores'
import dice from './dice'
import rollsRemaining from './rollsRemaining'
import tempDiceHash from './tempDiceHash'
import availableScores from './availableScores'
import rollScore from './rollScore'
import scoreCard from './scoreCard'



export default combineReducers({
   gamePage,
   highScores,
   dice,
   rollsRemaining,
   tempDiceHash,
   availableScores,
   rollScore,
   scoreCard
})
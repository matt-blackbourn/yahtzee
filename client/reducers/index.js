import { combineReducers } from 'redux'

import gamePage from './gamePage'
import highScores from './highScores'
import dice from './dice'
import rollsRemaining from './rollsRemaining'
import tempDiceHash from './tempDiceHash'
import availableScores from './availableScores'
import rollScore from './rollScore'
import scoreCard from './scoreCard'
import toggleConfirmButton from './toggleConfirmButton'
import upperTotal from './upperTotal'
import lowerTotal from './lowerTotal'
import toggleCutScore from './toggleCutScore'


export default combineReducers({
  scoreCard,
   gamePage,
   highScores,
   dice,
   rollsRemaining,
   tempDiceHash,
   availableScores,
   rollScore,
   toggleConfirmButton,
   upperTotal,
   lowerTotal,
   toggleCutScore,
})
import { combineReducers } from 'redux'

import gamePage from './gamePage'
import highScores from './highScores'
import dice from './dice'
import rollsRemaining from './rollsRemaining'
import tempDiceHash from './tempDiceHash'
import availableScores from './availableScores'
import rollScore from './rollScore'
import scoreCard from './scoreCard'
import confirmButtonDisabled from './confirmButtonDisabled'
import cutScoreButtonDisabled from './cutScoreButtonDisabled'
import scoresAvailableToCut from './scoresAvailableToCut'
import cutScoresAllowed from './cutScoresAllowed'

export default combineReducers({
  scoreCard,
  rollsRemaining,
  availableScores,
  cutScoresAllowed,
  scoresAvailableToCut,
  confirmButtonDisabled,
  cutScoreButtonDisabled,
  dice,
  tempDiceHash,
  rollScore,
  highScores,
  gamePage,

})
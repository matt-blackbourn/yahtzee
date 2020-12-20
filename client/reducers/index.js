import { combineReducers } from 'redux'

import gamePage from './gamePage'
import highScores from './highScores'
import dice from './dice'
import rollsRemaining from './rollsRemaining'
import tempDiceHash from './tempDiceHash'
import availableScores from './availableScores'
import rollScore from './rollScore'
import scoreCard from './scoreCard'
import cutScoreButtonDisabled from './cutScoreButtonDisabled'
import scoresAvailableToCut from './scoresAvailableToCut'
import cutScoresAllowed from './cutScoresAllowed'
import activeHighScore from './activeHighScore'
import showForm from './showForm'
import activeUser from './activeUser'

export default combineReducers({
  scoreCard,
  rollsRemaining,
  availableScores,
  cutScoresAllowed,
  scoresAvailableToCut,
  cutScoreButtonDisabled,
  dice,
  tempDiceHash,
  rollScore,
  highScores,
  gamePage,
  activeHighScore,
  showForm,
  activeUser,
})
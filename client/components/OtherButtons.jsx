import React from 'react'
import { connect } from 'react-redux'
import { updateScoreCard, endTurn, disableCutScoreButton, disallowCutScores, resetRollScore, availableToCut } from '../actions'
import { scoreTopSection, scoreBottomSection } from '../utils/scoringLogic'
import { buildCutScoresArray, toggleCutScore } from '../utils/cutScore'


const confirmScore = props => {
  props.dispatch(endTurn())
  props.dispatch(disableCutScoreButton())
  props.dispatch(disallowCutScores())
  props.dispatch(resetRollScore())
  props.dispatch(updateScoreCard(props.rollScore.button, props.rollScore.score))
  scoreTopSection(props)
  scoreBottomSection(props)
}

const cutScore = props => {
  props.dispatch(resetRollScore())
  props.dispatch(availableToCut(buildCutScoresArray(props)))
  toggleCutScore(props)
}

function OtherButtons(props) {
  return (
    <div>
      <button
        disabled={props.rollScore.button === ''}
        onClick={() => confirmScore(props)}
      >Confirm</button>
      <button
        disabled={props.cutScoreButtonDisabled}
        onClick={() => cutScore(props)}
      >Cut a Score</button>
    </div>
  )
}

function ms2p(globalState) {
  return {
    rollsRemaining: globalState.rollsRemaining,
    rollScore: globalState.rollScore,
    scoreCard: globalState.scoreCard,
    cutScoreButtonDisabled: globalState.cutScoreButtonDisabled,
    cutScoresAllowed: globalState.cutScoresAllowed
  }
}

export default connect(ms2p)(OtherButtons)
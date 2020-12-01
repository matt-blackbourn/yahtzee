import React from 'react'
import { connect } from 'react-redux'
import { updateScoreCard, endTurn, disableCutScoreButton, disallowCutScores, resetRollScore, availableToCut, changePage } from '../actions'
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
  checkForFinishedGame(props)
}

const checkForFinishedGame = props => {
  if(props.scoreCard.grandTotal.print){
    alert('Game over! Your score was ' + props.scoreCard.grandTotal.value + '. Click restart game to play again!')
  }
}

const cutScore = props => {
  props.dispatch(resetRollScore())
  props.dispatch(availableToCut(buildCutScoresArray(props)))
  toggleCutScore(props)
}

const toggleHighScores = (props, event) => {
  event.preventDefault()
  props.dispatch(changePage(false))
}

function OtherButtons(props) {
  return (
    <div className='container flexCenter'>

      <button
        disabled={props.rollScore.button === ''}
        onClick={() => confirmScore(props)}
      >Confirm</button>

      <button
        disabled={props.cutScoreButtonDisabled}
        onClick={() => cutScore(props)}
      >Cut a Score</button>

      <a href='' onClick={(event) => toggleHighScores(props, event)}><h4>High Scores!</h4></a>

      {props.scoreCard.grandTotal.print && <button>Save Score</button>}
      
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
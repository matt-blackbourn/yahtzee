import React from 'react'
import { connect } from 'react-redux'
import { updateScoreCard, endTurn, cutDisabled } from '../actions'

function confirmScore(props) {
  props.dispatch(endTurn())
  props.dispatch(cutDisabled())
  props.dispatch(updateScoreCard(props.rollScore.button, props.rollScore.score))
}

function OtherButtons(props) {
   return (
      <div>
         <button 
         disabled={props.toggleConfirmButton}
         onClick={() => confirmScore(props)}
         >Confirm</button>
         <button 
         disabled={props.toggleCutScore}
         >Cut a Score</button>
      </div>
   )
}

function ms2p(globalState){
  return {
    rollsRemaining: globalState.rollsRemaining,
    rollScore: globalState.rollScore,
    scoreCard: globalState.scoreCard,
    toggleConfirmButton: globalState.toggleConfirmButton,
    toggleCutScore: globalState.toggleCutScore,
  }
}

export default connect(ms2p)(OtherButtons)
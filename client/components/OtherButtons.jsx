import React from 'react'
import { connect } from 'react-redux'
import { updateScoreCard, endTurn } from '../actions'

function confirmScore(props) {
  props.dispatch(endTurn())
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
         disabled
         >Cut a Score</button>
      </div>
   )
}

function ms2p(globalState){
  return {
    rollsRemaining: globalState.rollsRemaining,
    rollScore: globalState.rollScore,
    scoreCard: globalState.scoreCard,
    toggleConfirmButton: globalState.toggleConfirmButton
  }
}

export default connect(ms2p)(OtherButtons)
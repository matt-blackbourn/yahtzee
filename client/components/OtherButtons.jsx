import React from 'react'
import { connect } from 'react-redux'
import { updateScoreCard } from '../actions'

function endTurn(props) {
  props.dispatch(updateScoreCard(props.rollScore.button, props.rollScore.score))
}

function OtherButtons(props) {
   return (
      <div>
         <button 
         disabled={props.rollsRemaining == 3 && true}
         onClick={() => endTurn(props)}
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
    scoreCard: globalState.scoreCard
  }
}

export default connect(ms2p)(OtherButtons)
import React from 'react'
import { connect } from 'react-redux'
import { updateScoreCard, endTurn, cutDisabled, updateUpperTotal } from '../actions'


function scoreTopSection(props){
  let arr = Object.values(props.scoreCard)
  let total = 0
  let allScoresFilled = true
  for(let i = 0; i < 6; i++){
    total += arr[i].value
    if(!arr[i].scored) allScoresFilled = false
  }
  props.dispatch(updateUpperTotal(total, allScoresFilled))
}

function confirmScore(props) {
  props.dispatch(endTurn())
  props.dispatch(cutDisabled())
  props.dispatch(updateScoreCard(props.rollScore.button, props.rollScore.score))
  scoreTopSection(props)
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
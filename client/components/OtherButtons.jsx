import React from 'react'
import { connect } from 'react-redux'
import { updateScoreCard, endTurn, cutDisabled, availableToCut, allowCutScores, disallowCutScores } from '../actions'
import { scoreTopSection, scoreBottomSection } from '../utils/scoringLogic'


function confirmScore(props) {
  props.dispatch(endTurn())
  props.dispatch(cutDisabled())
  props.dispatch(disallowCutScores())
  props.dispatch(updateScoreCard(props.rollScore.button, props.rollScore.score))
  scoreTopSection(props)
  scoreBottomSection(props)
}

const map = {
  ones: 'Ones',
  twos: 'Twos',
  threes: 'Threes',
  fours: 'Fours',
  fives: 'Fives',
  sixes: 'Sixes',
  threeOfKind: '3 of kind',
  fourOfKind: '4 of kind',
  fullHouse: 'Full House',
  smStraight: 'Small Straight',
  lgStraight: 'Large Straight',
  yahtzee: 'Yahtzee',
  chance: 'Chance',
}

function cutScore(props){
  props.dispatch(allowCutScores())
  let arr = Object.entries(props.scoreCard)
  let scores = []
  for(let i = 0; i < 6; i++){
    if(!arr[i][1].scored){
      scores.push(map[arr[i][0]])
    }
  }
  for(let i = 9; i <= 15; i++){
    if(!arr[i][1].scored){
      scores.push(map[arr[i][0]])
    }
  }
  props.dispatch(availableToCut(scores))
}

function OtherButtons(props) {
   return (
      <div>
         <button 
         disabled={props.confirmButtonDisabled}
         onClick={() => confirmScore(props)}
         >Confirm</button>
         <button 
         disabled={props.cutScoreButtonDisabled}
         onClick={() => cutScore(props)}
         >Cut a Score</button>
      </div>
   )
}

function ms2p(globalState){
  return {
    rollsRemaining: globalState.rollsRemaining,
    rollScore: globalState.rollScore,
    scoreCard: globalState.scoreCard,
    confirmButtonDisabled: globalState.confirmButtonDisabled,
    cutScoreButtonDisabled: globalState.cutScoreButtonDisabled,
  }
}

export default connect(ms2p)(OtherButtons)
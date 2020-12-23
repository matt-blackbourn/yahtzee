import React from 'react'
import { connect } from 'react-redux'
import { postScore } from '../actions/highScores'

const handleClick = props => {
  let scores = Object.entries(props.scoreCard)
  let newScore = {}
  for (let i = 0; i < scores.length; i++) {
    newScore[scores[i][0]] = scores[i][1].value
  }
  newScore.username = props.activeUser
  props.dispatch(postScore(newScore))
}

function SaveScore(props) {
  return (
    <div>
      <p>Do you want to save your score, {props.activeUser}?</p>
      <button onClick={() => handleClick(props)}>Save Score</button>
    </div>
  )
}

function ms2p(globalState) {
  return {
    activeUser: globalState.activeUser,
    scoreCard: globalState.scoreCard
  }
}

export default connect(ms2p)(SaveScore)
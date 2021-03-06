import React from 'react'
import { connect } from 'react-redux'
import { reduceRollsRemaining, enableCutScoreButton, restartGame } from '../actions'
import { rollAvailableDice } from '../utils/rollDiceLogic'

const rollDice = props => {
  if (props.rollsRemaining > 0) {
    rollAvailableDice(props)
    props.dispatch(reduceRollsRemaining())
    props.dispatch(enableCutScoreButton())
  }
}

const restart = props => {
  if (window.confirm('Are you sure you want to restart your game?')) {
    props.dispatch(restartGame())
  }
}

const Nav = props => {
  return (
    <div className="container flexCenter">
      <button
        id="roll"
        disabled={(props.rollsRemaining === 0 || props.scoreCard.grandTotal.print)}
        onClick={() => rollDice(props)}>
        Roll</button>
      <h4>Score: <span>{props.rollScore.score}</span></h4>
      <h4>Rolls: <span>{props.rollsRemaining}</span></h4>
      <button onClick={() => restart(props)}>Restart</button>
    </div>
  )
}

const mapState2Props = globalState => {
  return {
    dice: globalState.dice,
    rollsRemaining: globalState.rollsRemaining,
    tempHash: globalState.tempDiceHash,
    rollScore: globalState.rollScore,
    scoreCard: globalState.scoreCard
  }
}

export default connect(mapState2Props)(Nav)


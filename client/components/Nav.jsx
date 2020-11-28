import React from 'react'
import { connect } from 'react-redux'
import { changePage, reduceRollsRemaining } from '../actions'
import { rollAvailableDice } from '../utils/rollDiceLogic'



const toggleHighScores = (props, event) => {
   event.preventDefault()
   props.dispatch(changePage(false))
}

const rollDice = props => {
   if(props.rollsRemaining > 0){
      rollAvailableDice(props)
      props.dispatch(reduceRollsRemaining())
   }
}

const Nav = props => {
   return (
      <div className="container">
         <button id="roll" onClick={() => rollDice(props)}>Roll</button>
        <h4>You will score: <span>{props.rollScore.score}</span></h4>
         <h4>Rolls remaining: <span>{props.rollsRemaining}</span></h4>
         <a href='' onClick={(event) => toggleHighScores(props, event)}><h4>High Scores!</h4></a>
      </div>
   )
}

const mapState2Props = globalState => {
   return {
      dice: globalState.dice,
      rollsRemaining: globalState.rollsRemaining,
      tempHash: globalState.tempDiceHash,
      rollScore: globalState.rollScore
   }
}

export default connect(mapState2Props)(Nav)


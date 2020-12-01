import React from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions'

function handleClick(props, event){
   event.preventDefault()
   props.dispatch(changePage(true))
}

function Highscores(props) {
   return(
      <>
         <h1>Highscores page!</h1>
         <ul>
          {props.highScores.map(score => {
            return <li>{score.name} - Total: {score.grandTotal}</li>
          })}
         </ul>
         <a href='' onClick={(event) => handleClick(props, event)}>Back to Yahtzee!</a>
      </>
   )
}

function ms2p(globalState){
  return {
    highScores: globalState.highScores
  }
}

export default connect(ms2p)(Highscores)
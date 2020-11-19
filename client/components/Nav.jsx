import React from 'react'
import { connect } from 'react-redux'
import { changePage, rollDice } from '../actions'

function handleClick(props, event){
   event.preventDefault()
   props.dispatch(changePage(false))
}

const rollAvailableDice = (props) => {
   let newDice = [...props.diceArray]
   for(let i = 0; i < props.diceArray.length; i++){
      if(!props.diceArray[i].keep){
         newDice[i].value = (Math.floor(Math.random()*6)+1)
      }
   }
   props.dispatch(rollDice(newDice))
}

function Nav(props) {
   return (
      <div className="container">
         <button id="roll" onClick={() => rollAvailableDice(props)}>Roll</button>
         <h4>You will score: <span>X</span></h4>
         <h4>Rolls remaining: <span>{props.rollsRemaining}</span></h4>
         <a href='' onClick={(event) => handleClick(props, event)}><h4>High Scores!</h4></a>
      </div>
   )
}

function mapState2Props(globalState){
   return {
      diceArray: globalState.diceArray
   }
}

export default connect(mapState2Props)(Nav)


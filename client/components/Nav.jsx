import React from 'react'
import { connect } from 'react-redux'
import { changePage, roll, reduceRollsRemaining, buildHash } from '../actions'

function linkClick(props, event){
   event.preventDefault()
   props.dispatch(changePage(false))
}

const rollAvailableDice = (props) => {
   let newDice = [...props.dice]
   for(let i = 0; i < props.dice.length; i++){
      if(!props.dice[i].keep){
         newDice[i].value = (Math.floor(Math.random()*6)+1)
      }
   }
   props.dispatch(roll(newDice))
}


function buildTempDiceHash(props){
   const tempDiceHash = {}
   for(let i = 0; i < 5; i++){
      tempDiceHash[props.dice[i].value] = (tempDiceHash[props.dice[i].value] || 0) + 1  
   }
   props.dispatch(buildHash(tempDiceHash)) 
}

function rollDice(props){
   if(props.rollsRemaining > 0){
      props.dispatch(reduceRollsRemaining(props.rollsRemaining))
      rollAvailableDice(props)
      buildTempDiceHash(props)
   }
}


function Nav(props) {
   return (
      <div className="container">
         <button id="roll" onClick={() => rollDice(props)}>Roll</button>
         <h4>You will score: <span>X</span></h4>
         <h4>Rolls remaining: <span>{props.rollsRemaining}</span></h4>
         <a href='' onClick={(event) => linkClick(props, event)}><h4>High Scores!</h4></a>
      </div>
   )
}

function mapState2Props(globalState){
   return {
      dice: globalState.dice,
      rollsRemaining: globalState.rollsRemaining
   }
}

export default connect(mapState2Props)(Nav)


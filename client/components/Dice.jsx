import React from 'react'
import { connect } from 'react-redux'
import { holdDice } from '../actions'

function Dice(props) {
   return (
      <div className='container'>
         {props.dice.map((dice, index) => {
            return (
               <button 
               className={`dice ${dice.class}`}
               key={index} 
               id={index} 
               onClick={() => keepDice(index, props)}
               >{dice.value}
               </button>
            )
         })} 
      </div>
   )
}


function keepDice(index, props){
   let newState = [...props.dice]
   if(props.dice[index].keep){
      newState[index].keep = false
      newState[index].class = ''
   } else {
      newState[index].keep = true
      newState[index].class = 'keep'
   }
   props.dispatch(holdDice(newState))
}

function mapStateToProps(globalState){
   return {
      dice: globalState.dice
   }
}

export default connect(mapStateToProps)(Dice)


 
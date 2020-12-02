import React from 'react'
import { connect } from 'react-redux'
import { keepDice } from '../utils/rollDiceLogic'

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

function mapStateToProps(globalState){
   return {
      dice: globalState.dice,
      rollsRemaining: globalState.rollsRemaining
   }
}

export default connect(mapStateToProps)(Dice)


 
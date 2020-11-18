import React from 'react'
import { connect } from 'react-redux'

function Dice(props) {
   return (
      <div className='container'>
         {props.diceArray.map((dice, key) => {
            return (
               <button 
                  className={`dice ${dice.class}`}
                  key={key} 
                  id={key} 
                
                  >{dice.value}
               </button>
            )
         })} 
      </div>
   )
}

function mapStateToProps(globalState){
   return {
      diceArray: globalState.diceArray
   }
}

export default connect(mapStateToProps)(Dice)


 
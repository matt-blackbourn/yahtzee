import React from 'react'

function Dice(props) {

   return (
      <div>
         <h3>Dice</h3>
      </div>
   )
}

export default Dice


{/* <div className='container'>
         {props.values.map((dice, key) => {
            return (
               <button 
                  className={`dice ${dice.class}`}
                  key={key} id={key} 
                  onClick={props.keepDice}
                  >{dice.value}
               </button>
            )
         })} */}
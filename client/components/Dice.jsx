import React from 'react'

function Dice(props) {
   return (
      <div>
         {props.values.map((dice, key) => {
            return (
               <button className="dice" key={key}>{dice.value}</button>
            )
         })}
      </div>
   )
}

export default Dice
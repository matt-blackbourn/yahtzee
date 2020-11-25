import React from 'react'

const buttonNames = ['3 of kind', '4 of kind', 'Full House', 'Small Straight', 'Large Straight', 'Yahtzee', 'Chance']

function LowerButtons(props) {
   return (
      <div>
         {buttonNames.map((button, index) => {
            return <button key={index} className="scoringButtons" disabled>{button}</button>
         })}
      </div>
   )
}


export default LowerButtons
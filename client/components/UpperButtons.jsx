import React from 'react'

const buttonNames = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes']

function UpperButtons(props) {
   return (
      <div>
         {buttonNames.map((button, index) => {
            return <button key={index} className="scoringButtons" disabled>{button}</button>
         })}
      </div>
   )
}

export default UpperButtons
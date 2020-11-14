import React from 'react'

function LowerButtons(props) {
   return (
      <div>
         <button className="scoringButtons" disabled>3 of kind</button>
         <button className="scoringButtons" disabled>4 of kind</button>
         <button className="scoringButtons" disabled>Full House</button>
         <button className="scoringButtons" disabled>Small Straight</button>
         <button className="scoringButtons" disabled>Large Straight</button>
         <button className="scoringButtons" disabled>Yahtzee</button>
         <button className="scoringButtons" disabled>Chance</button>
      </div>
   )
}


export default LowerButtons
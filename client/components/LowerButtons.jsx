import React from 'react'
import { connect } from 'react-redux'

const buttonNames = ['3 of kind', '4 of kind', 'Full House', 'Small Straight', 'Large Straight', 'Yahtzee', 'Chance']

function LowerButtons(props) {
   return (
      <div>
         {buttonNames.map((button, index) => {
            return <button 
            key={index} 
            className="scoringButtons" 
            disabled={!props.availableScores.includes(button) && button}>
               {button}</button>
         })}
      </div>
   )
}

const ms2p = globalState => {
   return {
      availableScores: globalState.availableScores
   }
}

export default connect(ms2p)(LowerButtons)
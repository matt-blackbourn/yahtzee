import React from 'react'
import { connect } from 'react-redux'
import { calculateScore } from '../utils/scoringLogic'

const buttonNames = ['3 of kind', '4 of kind', 'Full House', 'Small Straight', 'Large Straight', 'Yahtzee', 'Chance']

const LowerButtons = props => {
   return (
      <div>
         {buttonNames.map((name, index) => {
            return <button 
               key={index} 
               className={props.availableScores.includes(name) ? 'lower' : ''} 
               disabled={!props.availableScores.includes(name) && name}
               id={name}
               onClick={(event) => calculateScore(event, props)}>
                  {name}
               </button>
         })}
      </div>
   )
}

const ms2p = globalState => {
   return {
      availableScores: globalState.availableScores,
      tempHash: globalState.tempDiceHash,
      dice: globalState.dice
   }
}

export default connect(ms2p)(LowerButtons)
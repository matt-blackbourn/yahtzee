import React from 'react'
import { connect } from 'react-redux'
import { calculateScore } from '../utils/scoringLogic'

const buttonNames = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes']

const UpperButtons = props => {
   return (
      <div>
         {buttonNames.map((name, index) => {
            return <button 
               key={index} 
               className={props.availableScores.includes(name) ? 'upper' : ''}
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

export default connect(ms2p)(UpperButtons)

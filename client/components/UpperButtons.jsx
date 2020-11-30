import React from 'react'
import { connect } from 'react-redux'
import { calculateScore } from '../utils/scoringLogic'
import { getClass, enableButton } from '../utils/cutScore'


const buttonNames = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes']


const UpperButtons = props => {
   return (
      <div>
         {buttonNames.map((name, index) => {
            return <button 
               key={index} 
               className={getClass(props, name, 'upper')}
               disabled={enableButton(props, name)}
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
      dice: globalState.dice,
      cutScoresAllowed: globalState.cutScoresAllowed,
      scoresAvailableToCut: globalState.scoresAvailableToCut
   }
}

export default connect(ms2p)(UpperButtons)

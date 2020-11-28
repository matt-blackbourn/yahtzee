import React from 'react'
import { connect } from 'react-redux'

function endTurn() {
  
}

function OtherButtons(props) {
   return (
      <div>
         <button 
         disabled={props.rollsRemaining == 3 && true}
         onClick={endTurn}
         >Confirm</button>
         <button 
         disabled
         >Cut a Score</button>
      </div>
   )
}

function ms2p(globalState){
  return {
    rollsRemaining: globalState.rollsRemaining
  }
}

export default connect(ms2p)(OtherButtons)
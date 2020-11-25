import React from 'react'

import Nav from './Nav'
import Dice from './Dice'
import Buttons from './Buttons'
import OtherButtons from './OtherButtons'
import ScorecardSingle from './ScorecardSingle'

function Game(props) {
   return(
      <>
         <Nav />
         <Dice />
         <Buttons />

         <OtherButtons />
         <ScorecardSingle />
      </>
   )
}

export default Game
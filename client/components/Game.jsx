import React from 'react'

import Nav from './Nav'
import Dice from './Dice'
import UpperButtons from './UpperButtons'
import LowerButtons from './LowerButtons'
import OtherButtons from './OtherButtons'
import ScorecardSingle from './ScorecardSingle'

function Game(props) {
   return(
      <>
         <Nav />
         <Dice />
         <UpperButtons />
         <LowerButtons />
         <OtherButtons />
         <ScorecardSingle />
      </>
   )
}

export default Game
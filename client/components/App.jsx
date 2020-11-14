
import React from 'react'
import Nav from './Nav'
import Dice from './Dice'
import UpperButtons from './UpperButtons'
import LowerButtons from './LowerButtons'
import OtherButtons from './OtherButtons'
import ScorecardSingle from './ScorecardSingle'
import ScorecardDouble from './ScorecardDouble'

// import { getInsult, imageApi,getHistory } from '../api'

class App extends React.Component {

   state = {
      twoPlayer: false,
      dice: [
         {value: null, keep: false},
         {value: null, keep: false},
         {value: null, keep: false},
         {value: null, keep: false},
         {value: null, keep: false}
      ],
   }

   rollAvailableDice = () => {
      this.setState({
         dice: [
            {value: 1, keep: false},
            {value: 2, keep: false},
            {value: 3, keep: false},
            {value: 4, keep: false},
            {value: 5, keep: false}
         ],
      })

      // this.state.dice.forEach((dice, index) => {
      //    if(!dice.keep){
      //       this.setState({
      //          dice.value: (Math.floor(Math.random()*6)+1)
      //       })
      //    }
      // })
   }

   componentDidMount = () => {

   }

   handleChange = (event) => {

   }

   handleClick = () => {

   }


   render() {
      return (
         <div className='container'>
            <Nav roll={this.rollAvailableDice}/>
            <Dice values={this.state.dice}/>
            <UpperButtons />
            <LowerButtons />
            <OtherButtons />
            {!this.state.twoPlayer && <ScorecardSingle />}
            {this.state.twoPlayer && <ScorecardDouble />}
         </div>
      )
   }
}

export default App

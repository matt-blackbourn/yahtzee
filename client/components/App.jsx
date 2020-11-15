
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

   roll = () => {
      this.rollAvailableDice()
   }

   rollAvailableDice = () => {
      for(let i = 0; i < this.state.dice.length; i++){
         if(!this.state.dice[i].keep){
            let newDice = [...this.state.dice]
            newDice[i].value = (Math.floor(Math.random()*6)+1)
            this.setState({
               dice: newDice
            })
         }
      }
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
            <Nav roll={this.roll}/>
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


import React from 'react'

import Nav from './Nav'
import Dice from './Dice'
import UpperButtons from './UpperButtons'
import LowerButtons from './LowerButtons'
import OtherButtons from './OtherButtons'
import ScorecardSingle from './ScorecardSingle'

// import { getHighScores } from '../api'


//where do I put player classes?
//better way of managing classnames on state change?
//how best to store scores data in database?
//where to refactor App functions to/how best to separate them?

//where does webpack.config.js come from?

class App extends React.Component {

   generateDiceArray = () => {
      let arr = []
      for(let i = 0; i < 5; i++){
         arr[i] = {value: null, keep: false, class: ''}
      }
      return arr
   }

   state = {
      twoPlayer: false,
      rollsRemaining: 3,
      dice: this.generateDiceArray()
   }

   roll = () => {
      if(this.state.rollsRemaining > 0){
         this.rollAvailableDice()
         //several other funcs
      }
   }

   rollAvailableDice = () => {
      for(let i = 0; i < this.state.dice.length; i++){
         if(!this.state.dice[i].keep){
            let newDice = [...this.state.dice]
            newDice[i].value = (Math.floor(Math.random()*6)+1)
            this.setState({
               dice: newDice,
               rollsRemaining: this.state.rollsRemaining -1
            })
         }
      }
   }

   keepDice = (event) => {
      if(this.state.rollsRemaining < 3 && this.state.rollsRemaining != 0){
         const num = event.target.id
         let newDice = [...this.state.dice]
         if(!newDice[num].keep){
            newDice[num].keep = true
            newDice[num].class = 'keep'
         } else {
            newDice[num].keep = false
            newDice[num].class = ''
         }
         this.setState({
            dice: newDice
         })
      }
   }

   render() {
      return (
         <div>
            <Nav 
               roll={this.roll}
               rollsRemaining={this.state.rollsRemaining}
            />
            <Dice 
               values={this.state.dice} 
               keepDice={this.keepDice}
            />
            <UpperButtons />
            <LowerButtons />
            <OtherButtons />
            <ScorecardSingle />
         </div>
      )
   }
}

export default App


import React, { useEffect } from 'react'
import Game from './Game'
import Highscores from './Highscores'
import { connect } from 'react-redux'
import { fetchHighScores } from '../actions'

function App(props) {
   useEffect(() => {
      props.dispatch(fetchHighScores())
   }, [])

   return (
      <div>
         {props.gamePage ? <Game /> : <Highscores />}
      </div>
   )
   
}

function mapState2Props(globalState){
   return {
      gamePage: globalState.gamePage
   }
}

export default connect(mapState2Props)(App)



// state = {
//    twoPlayer: false,
//    rollsRemaining: 3,

// }

// roll = () => {
//    if(this.state.rollsRemaining > 0){
//       this.rollAvailableDice()
//       //several other funcs
//    }
// }

// rollAvailableDice = () => {
//    for(let i = 0; i < this.state.dice.length; i++){
//       if(!this.state.dice[i].keep){
//          let newDice = [...this.state.dice]
//          newDice[i].value = (Math.floor(Math.random()*6)+1)
//          this.setState({
//             dice: newDice,
//             rollsRemaining: this.state.rollsRemaining -1
//          })
//       }
//    }
// }

// keepDice = (event) => {
//    if(this.state.rollsRemaining < 3 && this.state.rollsRemaining != 0){
//       const num = event.target.id
//       let newDice = [...this.state.dice]
//       if(!newDice[num].keep){
//          newDice[num].keep = true
//          newDice[num].class = 'keep'
//       } else {
//          newDice[num].keep = false
//          newDice[num].class = ''
//       }
//       this.setState({
//          dice: newDice
//       })
//    }
// }
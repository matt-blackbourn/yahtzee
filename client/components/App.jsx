
import React from 'react'
import Game from './Game'
import Highscores from './Highscores'
import { connect } from 'react-redux'
import { fetchScores } from '../actions'

class App extends React.Component {
   
   componentDidMount(){
      this.props.dispatch(fetchScores())
   }

   render() {
      return (
         <div>
            {this.props.gamePage ? <Game /> : <Highscores />}
         </div>
      )
   }
}

function mapState2Props(globalState){
   return {
      gamePage: globalState.gamePage
   }
}

export default connect(mapState2Props)(App)



// generateDiceArray = () => {
//    let arr = []
//    for(let i = 0; i < 5; i++){
//       arr[i] = {value: null, keep: false, class: ''}
//    }
//    return arr
// }

// state = {
//    twoPlayer: false,
//    rollsRemaining: 3,
//    dice: this.generateDiceArray()
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
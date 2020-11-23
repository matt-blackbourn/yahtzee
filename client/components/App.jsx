
import React, { useEffect } from 'react'
import Game from './Game'
import Highscores from './Highscores'
import { connect } from 'react-redux'
import { fetchHighScores } from '../api.js'

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


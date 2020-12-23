import React from 'react'
import Game from './Game'
import Highscores from './Highscores'
import { connect } from 'react-redux'
import { fetchHighScores } from '../actions/highScores'
import { verifyUser } from '../actions/auth'

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchHighScores())

    const token = window.localStorage.getItem('token')
    if (token) {
      this.props.dispatch(verifyUser(token))
    }
  }

  render(){
    return (
      <div>
        {this.props.gamePage ? <Game /> : <Highscores />}
      </div>
    )
  }
}

function mapState2Props(globalState) {
  return {
    gamePage: globalState.gamePage
  }
}

export default connect(mapState2Props)(App)


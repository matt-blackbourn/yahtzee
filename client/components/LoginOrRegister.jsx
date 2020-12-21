import React from 'react'
import { connect } from 'react-redux'
import { postScore } from '../actions/highScores'
import Register from './Register'

class SaveScoreForm extends React.Component {
  state = {
    name: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = event => {
    event.preventDefault()
    if(this.state.name === ''){
      alert('Enter your name!')
    } else {
      let newScore = {}
      let scores = Object.entries(this.props.scoreCard)
      for(let i = 0; i < scores.length; i++){
        newScore[scores[i][0]] = scores[i][1].value
      }
      newScore.name = this.state.name //this will be this.props.activeuser
      this.props.dispatch(postScore(newScore))
    }
  }

  render(){
    return(
      <>
      <h5>Log in to save your score</h5>
      <form>
          <input type="text" 
            name='username' 
            placeholder='username' 
            onChange={this.handleChange} />

          <input type="password" name='password' placeholder='Password' onChange={this.handleChange}/>

          <button onClick={this.handleClick}>Save Score</button>
          <Register />
        </form>
      </> 
    )
  }
}

function ms2p(globalState){
  return {
    scoreCard: globalState.scoreCard,
    activeUser: globalState.activeUser
  }
}

export default connect(ms2p)(SaveScoreForm)
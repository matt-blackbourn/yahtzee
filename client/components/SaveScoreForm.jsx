import React from 'react'
import { connect } from 'react-redux'
import { postScore } from '../actions/highScores'

class SaveScoreForm extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
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
      newScore.name = this.state.name
      this.props.dispatch(postScore(newScore))
    }
  }

  render(){
    return(
      <form>
          <input type="text" name='name' placeholder='Enter Your Name' onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Save Score</button>
        </form>
    )
  }
}

function ms2p(globalState){
  return {
    scoreCard: globalState.scoreCard
  }
}

export default connect(ms2p)(SaveScoreForm)
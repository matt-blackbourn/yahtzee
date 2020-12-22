import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component{
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = event => {
    // event.preventDefault()
    // if (this.state.name === '') {
    //   alert('Please enter a valid username')
    // } else {
    //   let newScore = {}
    //   let scores = Object.entries(this.props.scoreCard)
    //   for (let i = 0; i < scores.length; i++) {
    //     newScore[scores[i][0]] = scores[i][1].value
    //   }
    //   newScore.username = this.state.username
    //   this.props.dispatch(postScore(newScore))
    // }
  }

  render() {
    return (
      <>
        <h5>Log in to save your score</h5>
        <form>
          <input type="text"
            name='username'
            placeholder='username'
            onChange={this.handleChange} />

          <input type="password"
            name='password'
            placeholder='Password'
            onChange={this.handleChange} />

          <button onClick={this.handleClick}>Log In</button>
        </form>
      </>
    )
  }
}

function ms2p(globalState) {
  return {
    scoreCard: globalState.scoreCard,
    activeUser: globalState.activeUser
  }
}

export default connect(ms2p)(Login)
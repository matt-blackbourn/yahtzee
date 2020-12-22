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
    event.preventDefault()
    this.props.dispatch(login(this.state))

    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <>
        <h5>Please log in to save your score</h5>
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
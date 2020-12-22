import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import Register from './Register'

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
  }

  render() {
    return (
      <>
        <p>Please log in to save your score</p>
        <form>
          <input type="text"
            name='username'
            placeholder='username'
            onChange={this.handleChange}
            value={this.state.username} />

          <input type="password"
            name='password'
            placeholder='Password'
            onChange={this.handleChange}
            value={this.state.password} />

          <button onClick={this.handleClick}>Log In</button>
        </form>
        <p>Not registered? Click <a href=''>here</a> to register.</p>
        <Register />
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
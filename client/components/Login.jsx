import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import Register from './Register'
import { showRegister } from '../actions'

class Login extends React.Component {
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
    if(this.state.username == '' || this.state.password == ''){
      return alert('Please enter a username and password')
    }
    this.props.dispatch(login(this.state))
  }

  render() {
    return (
      <>
        {this.props.showRegister ?
          <Register />
          :
          <>
            <p>Please log in to save your score:</p>
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
            <p>
              Not registered yet? Click  
                <a href='' onClick={() => {
                  event.preventDefault()
                  this.props.dispatch(showRegister())
                }}> here
                </a> to register.
            </p>
          </>
        }
      </>
    )
  }
}

function ms2p(globalState) {
  return {
    scoreCard: globalState.scoreCard,
    activeUser: globalState.activeUser,
    showRegister: globalState.showRegister
  }
}

export default connect(ms2p)(Login)
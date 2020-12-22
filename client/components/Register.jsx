import React from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../actions/auth'

class Register extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(registerUser(this.state))
    this.setState({
      username: '',
      password: ''
    })
  }

  render(){
    return (
      <>
      <p>Please Register to save your score:</p>
      <form>
        <input type="text" 
          name='username' 
          onChange={this.handleChange} 
          value={this.state.username}
          placeholder='username' />

        <input type="password" 
          name='password' 
          onChange={this.handleChange} 
          value={this.state.password}
          placeholder='password' />
          
        <input type="submit" value='Register' onClick={this.handleSubmit}/>
      </form>
      </>
    )
  }
}

export default connect()(Register)
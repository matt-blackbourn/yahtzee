import React from 'react'

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
    console.log(this.state)
  }

  render(){
    return (
      <>
      <h5>Please Register to save your score:</h5>
      <form>
        <input type="text" name='username' onChange={this.handleChange}/>
        <input type="password" name='password' onChange={this.handleChange}/>
        <input type="submit" value='register' onClick={this.handleSubmit}/>
      </form>
      </>
    )
  }
}

export default Register
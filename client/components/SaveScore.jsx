import React from 'react'
import { connect } from 'react-redux'

function SaveScore(props){
  return (
    <div>
      <p>Hello {props.activeUser}, click to save your score!</p>
      <button>Save Score</button>
    </div>
  )
}

function ms2p(globalState){
  return {
    activeUser: globalState.activeUser
  }
}

export default connect(ms2p)(SaveScore)
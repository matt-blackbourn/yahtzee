import React from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions'

function handleClick(props, event){
   event.preventDefault()
   props.dispatch(changePage(true))
}

function Hightscores(props) {
   return(
      <>
         <h1>ASH IS A GAYLORD</h1>
         <a href='' onClick={(event) => handleClick(props, event)}>Back to Yahtzee!</a>
      </>
   )
}

export default connect()(Hightscores)
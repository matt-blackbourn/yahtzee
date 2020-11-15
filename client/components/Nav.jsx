import React from 'react'

function Nav(props) {
   return (
      <div className="container">
         <button onClick={props.roll} id="roll">Roll</button>
         <h4>You will score: <span>X</span></h4>
         <h4>Rolls remaining: <span>{props.rollsRemaining}</span></h4>
         <a href=''><h4>High Scores!</h4></a>
      </div>
   )
}

export default Nav
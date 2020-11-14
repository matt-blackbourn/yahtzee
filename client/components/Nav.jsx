import React from 'react'

function Nav(props) {
   return (
      <div className="nav">
      <button onClick={props.roll} id="roll">Roll</button>
      <h4>Rolls remaining: <span id="rolls">3</span></h4>
      <select name="two-player" id="two-player">
         <option value="1">1 Player</option>
         <option value="2">2 Player</option>
      </select>
   </div>
   )
}


export default Nav
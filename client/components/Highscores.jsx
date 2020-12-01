import React from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions'
import { changeActiveScore } from '../actions/highScores'

function handleClick(props, event) {
  event.preventDefault()
  props.dispatch(changePage(true))
}

function Highscores(props) {
  return (
    <div className='container'>
      <div>
        <h2>Highscores!</h2>
        <ul>
          {props.highScores.map(score => {
            return (
              <li key={score.id}>{score.name} :
                <a href="" onClick={(event) => {
                  event.preventDefault()
                  props.dispatch(changeActiveScore(score))
                }}>{score.grandTotal}</a>
              </li>
            )
          })}
        </ul>
        <a href='' onClick={(event) => handleClick(props, event)}>Back to Yahtzee!</a>
      </div>
      <table>
        <tbody>
          <tr>
            <td></td>
        <th>{props.activeHighScore ? props.activeHighScore.name : 'Scores'}</th>
          </tr>
          <tr>
            <td>1</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td></td>
          </tr>
          <tr>
            <td className="bold">Total</td>
            <td className="bold"></td>
          </tr>
          <tr>
            <td className="bold">Bonus</td>
            <td className="bold" ></td>
          </tr>
          <tr>
            <td className="bold">Upper Total</td>
            <td className="bold" ></td>
          </tr>
          <tr>
            <td>Three of a kind</td>
            <td></td>
          </tr>
          <tr>
            <td>Four of a kind</td>
            <td></td>
          </tr>
          <tr>
            <td>Full House</td>
            <td></td>
          </tr>
          <tr>
            <td>Small Straight</td>
            <td></td>
          </tr>
          <tr>
            <td>Large Straight</td>
            <td></td>
          </tr>
          <tr>
            <td>Yahtzee</td>
            <td></td>
          </tr>
          <tr>
            <td>Chance</td>
            <td></td>
          </tr>
          <tr>
            <td className="bold">Bonus Yahtzee</td>
            <td className="bold"></td>
          </tr>
          <tr>
            <td className="bold">Lower Total</td>
            <td className="bold"></td>
          </tr>
          <tr>
            <td className="bold">Grand Total</td>
            <td className="bold"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function ms2p(globalState) {
  return {
    highScores: globalState.highScores,
    activeHighScore: globalState.activeHighScore
  }
}

export default connect(ms2p)(Highscores)
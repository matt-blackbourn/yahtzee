import React from 'react'
import { connect } from 'react-redux'
import { changePage } from '../actions'
import { changeActiveScore } from '../actions/highScores'

function Highscores(props) {
  return (
    <div className='container'>
      <div>
        <h2>Highscores!</h2>
        <ul>
          {props.highScores.map(score => {
            return (
              <li key={score.id}>{score.username} :
                <a href="" onClick={(event) => {
                  event.preventDefault()
                  props.dispatch(changeActiveScore(score))
                }}>{score.grandTotal}</a>
              </li>
            )
          })}
        </ul>
        <br></br>
        <a href='' onClick={(event) => {
          event.preventDefault()
          props.dispatch(changePage(true))
        }}>Back to Yahtzee!</a>
      </div>
      <table>
        <tbody>
          <tr>
            <td className="bold">{props.activeHighScore ? props.activeHighScore.name : ''}</td>
            <th>Scores</th>
          </tr>
          <tr>
            <td>1</td>
            <td>{props.activeHighScore ? props.activeHighScore.ones : ''}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{props.activeHighScore ? props.activeHighScore.twos : ''}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{props.activeHighScore ? props.activeHighScore.threes : ''}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{props.activeHighScore ? props.activeHighScore.fours : ''}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{props.activeHighScore ? props.activeHighScore.fives : ''}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{props.activeHighScore ? props.activeHighScore.sixes : ''}</td>
          </tr>
          <tr>
            <td className="bold">Total</td>
            <td className="bold">{props.activeHighScore ? props.activeHighScore.total : ''}</td>
          </tr>
          <tr>
            <td className="bold">Bonus</td>
            <td className="bold" >{props.activeHighScore ? props.activeHighScore.bonus : ''}</td>
          </tr>
          <tr>
            <td className="bold">Upper Total</td>
            <td className="bold" >{props.activeHighScore ? props.activeHighScore.upperTotal : ''}</td>
          </tr>
          <tr>
            <td>Three of a kind</td>
            <td>{props.activeHighScore ? props.activeHighScore.threeOfKind : ''}</td>
          </tr>
          <tr>
            <td>Four of a kind</td>
            <td>{props.activeHighScore ? props.activeHighScore.fourOfKind : ''}</td>
          </tr>
          <tr>
            <td>Full House</td>
            <td>{props.activeHighScore ? props.activeHighScore.fullHouse : ''}</td>
          </tr>
          <tr>
            <td>Small Straight</td>
            <td>{props.activeHighScore ? props.activeHighScore.smStraight : ''}</td>
          </tr>
          <tr>
            <td>Large Straight</td>
            <td>{props.activeHighScore ? props.activeHighScore.lgStraight : ''}</td>
          </tr>
          <tr>
            <td>Yahtzee</td>
            <td>{props.activeHighScore ? props.activeHighScore.yahtzee : ''}</td>
          </tr>
          <tr>
            <td>Chance</td>
            <td>{props.activeHighScore ? props.activeHighScore.chance : ''}</td>
          </tr>
          <tr>
            <td className="bold">Bonus Yahtzee</td>
            <td className="bold">{props.activeHighScore ? props.activeHighScore.bonusYahtzee : ''}</td>
          </tr>
          <tr>
            <td className="bold">Lower Total</td>
            <td className="bold">{props.activeHighScore ? props.activeHighScore.lowerTotal : ''}</td>
          </tr>
          <tr>
            <td className="bold">Grand Total</td>
            <td className="bold">{props.activeHighScore ? props.activeHighScore.grandTotal : ''}</td>
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
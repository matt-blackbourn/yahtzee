import React from 'react'
import { connect } from 'react-redux'

function ScoreCardSingle(props) {
  return (
    <table>
      <tbody>
        <tr>
          <td></td><th>Your Scores</th>
        </tr>
        <tr>
          <td>1</td><td>{props.scoreCard.ones > 0 && props.scoreCard.ones}</td>
        </tr>
        <tr>
          <td>2</td><td></td>
        </tr>
        <tr>
          <td>3</td><td></td>
        </tr>
        <tr>
          <td>4</td><td></td>
        </tr>
        <tr>
          <td>5</td><td></td>
        </tr>
        <tr>
          <td>6</td><td></td>
        </tr>
        <tr>
          <td className="bold">Total</td><td className="bold"></td>
        </tr>
        <tr>
          <td className="bold">Bonus</td><td className="bold" ></td>
        </tr>
        <tr>
          <td className="bold">Upper Total</td><td className="bold" ></td>
        </tr>
        <tr>
          <td>Three of a kind</td><td></td>
        </tr>
        <tr>
          <td>Four of a kind</td><td></td>
        </tr>
        <tr>
          <td>Full House</td><td></td>
        </tr>
        <tr>
          <td>Small Straight</td><td></td>
        </tr>
        <tr>
          <td>Large Straight</td><td></td>
        </tr>
        <tr>
          <td>Yahtzee</td><td></td>
        </tr>
        <tr>
          <td>Chance</td><td></td>
        </tr>
        <tr>
          <td className="bold">Bonus Yahtzee</td><td className="bold" ></td>
        </tr>
        <tr>
          <td className="bold">Lower Total</td><td className="bold" ></td>
        </tr>
        <tr>
          <td className="bold">Grand Total</td><td className="bold" ></td>
        </tr>
      </tbody>
    </table>
  )
}

function ms2p(globalState) {
  return {
    scoreCard: globalState.scoreCard
  }
}

export default connect(ms2p)(ScoreCardSingle)

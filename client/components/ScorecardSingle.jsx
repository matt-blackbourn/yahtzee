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
          <td>2</td><td>{props.scoreCard.twos > 0 && props.scoreCard.twos}</td>
        </tr>
        <tr>
          <td>3</td><td>{props.scoreCard.threes > 0 && props.scoreCard.threes}</td>
        </tr>
        <tr>
          <td>4</td><td>{props.scoreCard.fours > 0 && props.scoreCard.fours}</td>
        </tr>
        <tr>
          <td>5</td><td>{props.scoreCard.fives > 0 && props.scoreCard.fives}</td>
        </tr>
        <tr>
          <td>6</td><td>{props.scoreCard.sixes > 0 && props.scoreCard.sixes}</td>
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
          <td>Three of a kind</td><td>{props.scoreCard.threeOfKind > 0 && props.scoreCard.threeOfKind}</td>
        </tr>
        <tr>
          <td>Four of a kind</td><td>{props.scoreCard.fourOfKind > 0 && props.scoreCard.fourOfKind}</td>
        </tr>
        <tr>
          <td>Full House</td><td>{props.scoreCard.fullHouse > 0 && props.scoreCard.fullHouse}</td>
        </tr>
        <tr>
          <td>Small Straight</td><td>{props.scoreCard.smStraight > 0 && props.scoreCard.smStraight}</td>
        </tr>
        <tr>
          <td>Large Straight</td><td>{props.scoreCard.lgStraight > 0 && props.scoreCard.lgStraight}</td>
        </tr>
        <tr>
          <td>Yahtzee</td><td>{props.scoreCard.yahtzee > 0 && props.scoreCard.yahtzee}</td>
        </tr>
        <tr>
          <td>Chance</td><td>{props.scoreCard.chance > 0 && props.scoreCard.chance}</td>
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

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
          <td>1</td><td>{props.scoreCard.ones.scored && props.scoreCard.ones.value}</td>
        </tr>
        <tr>
          <td>2</td><td>{props.scoreCard.twos.scored && props.scoreCard.twos.value}</td>
        </tr>
        <tr>
          <td>3</td><td>{props.scoreCard.threes.scored && props.scoreCard.threes.value}</td>
        </tr>
        <tr>
          <td>4</td><td>{props.scoreCard.fours.scored && props.scoreCard.fours.value}</td>
        </tr>
        <tr>
          <td>5</td><td>{props.scoreCard.fives.scored && props.scoreCard.fives.value}</td>
        </tr>
        <tr>
          <td>6</td><td>{props.scoreCard.sixes.scored && props.scoreCard.sixes.value}</td>
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
          <td>Three of a kind</td><td>{props.scoreCard.threeOfKind.scored && props.scoreCard.threeOfKind.value}</td>
        </tr>
        <tr>
          <td>Four of a kind</td><td>{props.scoreCard.fourOfKind.scored && props.scoreCard.fourOfKind.value}</td>
        </tr>
        <tr>
          <td>Full House</td><td>{props.scoreCard.fullHouse.scored && props.scoreCard.fullHouse.value}</td>
        </tr>
        <tr>
          <td>Small Straight</td><td>{props.scoreCard.smStraight.scored && props.scoreCard.smStraight.value}</td>
        </tr>
        <tr>
          <td>Large Straight</td><td>{props.scoreCard.lgStraight.scored && props.scoreCard.lgStraight.value}</td>
        </tr>
        <tr>
          <td>Yahtzee</td><td>{props.scoreCard.yahtzee.scored && props.scoreCard.yahtzee.value}</td>
        </tr>
        <tr>
          <td>Chance</td><td>{props.scoreCard.chance.scored && props.scoreCard.chance.value}</td>
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

import React from 'react'
import { connect } from 'react-redux'
import SaveScore from './SaveScore'
import SaveScoreOptions from './SaveScoreOptions'

function ScoreCardSingle(props) {
  const card = props.scoreCard
  return (
    <div className='container'>
      <div>
        <table>
          <tbody>
            <tr>
              <td></td>
              <th>Your Scores</th>
            </tr>
            <tr>
              <td>1</td>
              <td>{card.ones.scored && card.ones.value}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{card.twos.scored && card.twos.value}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{card.threes.scored && card.threes.value}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{card.fours.scored && card.fours.value}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{card.fives.scored && card.fives.value}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>{card.sixes.scored && card.sixes.value}</td>
            </tr>
            <tr>
              <td className="bold">Total</td>
              <td className="bold">{card.total.print && card.total.value}</td>
            </tr>
            <tr>
              <td className="bold">Bonus</td>
              <td className="bold" >{card.bonus.print && card.bonus.value}</td>
            </tr>
            <tr>
              <td className="bold">Upper Total</td>
              <td className="bold" >{card.upperTotal.print && card.upperTotal.value}</td>
            </tr>
            <tr>
              <td>Three of a kind</td>
              <td>{card.threeOfKind.scored && card.threeOfKind.value}</td>
            </tr>
            <tr>
              <td>Four of a kind</td>
              <td>{card.fourOfKind.scored && card.fourOfKind.value}</td>
            </tr>
            <tr>
              <td>Full House</td>
              <td>{card.fullHouse.scored && card.fullHouse.value}</td>
            </tr>
            <tr>
              <td>Small Straight</td>
              <td>{card.smStraight.scored && card.smStraight.value}</td>
            </tr>
            <tr>
              <td>Large Straight</td>
              <td>{card.lgStraight.scored && card.lgStraight.value}</td>
            </tr>
            <tr>
              <td>Yahtzee</td>
              <td>{card.yahtzee.scored && card.yahtzee.value}</td>
            </tr>
            <tr>
              <td>Chance</td>
              <td>{card.chance.scored && card.chance.value}</td>
            </tr>
            <tr>
              <td className="bold">Bonus Yahtzee</td>
              <td className="bold" >{card.bonusYahtzee.print && card.bonusYahtzee.value}</td>
            </tr>
            <tr>
              <td className="bold">Lower Total</td>
              <td className="bold" >{card.lowerTotal.print && card.lowerTotal.value}</td>
            </tr>
            <tr>
              <td className="bold">Grand Total</td>
              <td className="bold" >{card.grandTotal.print && card.grandTotal.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {(props.showForm && !props.activeUser) && <SaveScoreOptions />}
        {(props.showForm && props.activeUser) && <SaveScore />}
      </div>
    </div>
  )
}

function ms2p(globalState) {
  return {
    scoreCard: globalState.scoreCard,
    showForm: globalState.showForm,
    activeUser: globalState.activeUser
  }
}

export default connect(ms2p)(ScoreCardSingle)

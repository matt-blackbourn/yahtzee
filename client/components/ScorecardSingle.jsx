import React from 'react'

const scores = ['1', '2', '3', '4', '5', '6', 'Total', 'Bonus', 'Upper Total', 'Three of kind', 'Four of kind', 'Full House', 'Small Straight', 'Large Straight', 'Yahtzee', 'Chance', 'Bonus Yahtzee', 'Lower Total', 'Grand Total']

function ScoreCardSingle(props) {
   return (
      <table>
         <tbody>
            <tr>
               <td></td><th>Your scores</th>
            </tr>
           {scores.map((score, index) => {
             return (
              <tr key={index}>
                <td>{score}</td><td></td>       
              </tr>
             )
           })}
         </tbody>
      </table>
   )
}

export default ScoreCardSingle

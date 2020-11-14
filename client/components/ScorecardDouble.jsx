import React from 'react'

function ScorecardDouble(props) {
   return (
      <table>
         <tbody>
            <tr>
               <td></td><th>Your scores</th><th>Player 2</th>
            </tr>
                  
            <tr>
               <td>1</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td>2</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td>3</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td>4</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td>5</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td>6</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td className="bold">Total</td><td className="p1T bold"></td><td className="p2T bold" ></td>
            </tr>
            <tr>
               <td className="bold">Bonus</td><td className="p1T bold" ></td><td className="p2T bold" ></td>
            </tr>
            <tr>
               <td className="bold">Upper Total</td><td className="p1T bold" ></td><td className="p2T bold" ></td>
            </tr>
            <tr>
               <td>Three of a kind</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td>Four of a kind</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td>Full House</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td>Small Straight</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td>Large Straight</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td>Yahtzee</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td>Chance</td><td className="p1"></td><td className="p2 "></td>
            </tr>
            <tr>
               <td className="bold">Bonus Yahtzee</td><td className="p1T bold" ></td><td className="p2T bold"></td>
            </tr>
            <tr>
               <td className="bold">Lower Total</td><td className="p1T bold" ></td><td className="p2T bold"></td>
            </tr>
            <tr>
               <td className="bold">Grand Total</td><td className="p1T bold" ></td><td className="p2T bold" ></td>
            </tr>
         </tbody>
      </table>
   )
}

export default ScorecardDouble

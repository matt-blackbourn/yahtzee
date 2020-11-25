import { buildHash, rollDice, scoringButtonsEnabled } from "./actions"


export const rollAvailableDice = (props) => {
   let newDice = [...props.dice]
   for(let i = 0; i < props.dice.length; i++){
      if(!props.dice[i].keep){
         newDice[i].value = (Math.floor(Math.random()*6)+1)
      }
   }
   props.dispatch(rollDice(newDice))
   buildTempDiceHash(props)
}


export const buildTempDiceHash = props => {
   const tempDiceHash = {}
   for(let i = 0; i < 5; i++){
      tempDiceHash[props.dice[i].value] = (tempDiceHash[props.dice[i].value] || 0) + 1  
   }
   props.dispatch(buildHash(tempDiceHash)) 
   checkPossibleScores(props, tempDiceHash)
}


export const checkPossibleScores = (props, tempHash) => {
   let availableScores = []
   for(let key of Object.keys(tempHash)){
      switch(key){
         case '1': availableScores.push('ones')
            break
         case '2': availableScores.push('twos')
            break
         case '3': availableScores.push('threes')
            break
         case '4': availableScores.push('fours')
            break
         case '5': availableScores.push('fives')
            break
         case '6': 
         default:
            availableScores.push('sixes')
            break
      }
   }
   props.dispatch(scoringButtonsEnabled(availableScores))
}
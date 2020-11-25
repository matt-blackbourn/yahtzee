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
   //check for numbers
   for(let key of Object.keys(tempHash)){
      switch(key){
         case '1': availableScores.push('Ones')
            break
         case '2': availableScores.push('Twos')
            break
         case '3': availableScores.push('Threes')
            break
         case '4': availableScores.push('Fours')
            break
         case '5': availableScores.push('Fives')
            break
         case '6': 
         default:
            availableScores.push('Sixes')
            break
      }
   }

   //check for runs and fullhouse
   for(let value of Object.values(tempHash)){
      if(value >= 3) availableScores.push('3 of kind')
      if(value >= 4) availableScores.push('4 of kind')
      if(value === 5){
         availableScores.push('Yahtzee')
         // handleBonusYahtzee()
      }
      if(value === 3 && Object.entries(tempHash).length === 2){
         availableScores.push('Full House')
      }
   }

   //check for straights
   let keys = Object.keys(tempHash)
   if(keys.length >= 4){
      if(
         (keys[0] === '1' && keys[3] === '4') || 
         (keys[0] === '2' && keys[3] === '5') ||
         (keys[0] === '3' && keys[3] === '6') ||
         (keys[1] === '3' && keys[4] === '6')
      ) availableScores.push('Small Straight')
   }
   if(keys.length === 5){
      if(
         (keys[0] === '1' && keys[4] === '5') ||
         (keys[0] === '2' && keys[4] === '6')
      ) availableScores.push('Large Straight')
   }

   props.dispatch(scoringButtonsEnabled(availableScores))
}

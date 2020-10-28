
let dice = [
   {value: null, keep: false},
   {value: null, keep: false},
   {value: null, keep: false},
   {value: null, keep: false},
   {value: null, keep: false}
]
let rollsRemaining = 3
const diceButtons = document.querySelectorAll('.dice')
const scoringButtons = document.querySelectorAll('.scoringButtons')
let score
let index
let turnsRemaining = 13
let allowCut = false
const playerScores = {
   'player1': []
}
let p1Totals = []
for(let i = 0; i < 6; i++){
   p1Totals[i] = undefined  
}
let yahtzeeScored = 0

//pull fullhouse logic into separate function?

buildPlayerScoresArray()


//===== MAIN GAME FUNCTION SECTION ================

//ADD DICE EVENT LISTENERS
for(let i = 0; i < diceButtons.length; i++){
   diceButtons[i].addEventListener('click', function(e){
      if(rollsRemaining > 0 && rollsRemaining < 3) toggleKeepDice(i, e)
   })
}

//ADD SCORING BUTTON EVENT LISTENERS
for(let i = 0; i < scoringButtons.length; i ++){
   scoringButtons[i].addEventListener('click', calculateTotal)
}

function roll(){
   enableCutScoreButton()
   if(rollsRemaining > 0){
      resetTurnScore()
      rollAvailableDice()
      checkPossibleScores()
      adjustRollsRemaining()
   }
}

function decrementTurn(){
   turnsRemaining --
   if(turnsRemaining === 0){
      alert('Game over! Refresh to start again')
    }
}

function endTurn(){
   if(scoreIsAvailable(index) && score >= 0){
      if(allowCut) cutScore(index)
      resetDiceArray()
      resetRollsRemaining()
      disableScoreButtons()
      updatePlayerScores(index, score)
      scoreTopSection()
      scoreBottomSection()
      printScoreSheet()
      disableCutScoreButton()
      enableRollButton()
      decrementTurn()
   } else {
      alert('please choose a different score')
   }
   allowCut = false
}

function allowCutScore(){
   if(rollsRemaining === 3) return
   if(!allowCut){
      enableCutScore()
   } else {
      resetTurnScore()
      checkPossibleScores()
      allowCut = false
   }
}

//========== MAIN FUNCTION SECTION ENDS =============


//=============HELPER FUNCTIONS=======================

function adjustRollsRemaining(){
   rollsRemaining --
   let rollsDisplay = document.querySelector('#rolls')
   rollsDisplay.innerHTML = rollsRemaining
   if(rollsRemaining === 0) disableRollButton()
}

function disableCutScoreButton(){
   document.querySelector('#cutScore').disabled = true
}

function enableCutScoreButton(){
   document.querySelector('#cutScore').disabled = false
}

function disableRollButton(){
   document.querySelector('#roll').disabled = true
}

function enableRollButton(){
   document.querySelector('#roll').disabled = false
}

function enableCutScore(){
   allowCut = true
   let allButtons = document.querySelectorAll('.scoringButtons')
   for(let i = 0; i < allButtons.length; i++){
      if(scoreIsAvailable(i)){
         allButtons[i].disabled = false
         allButtons[i].classList.add('cutScore')
      } 
   }
}

function cutScore(index){
   let allCells = document.querySelectorAll('.p1')
   allCells[index].classList.add('blackout')
}

function scoreTopSection(){
   let p1ScoreCells = document.querySelectorAll('.p1T')
   let total = 0
   for(let i = 0; i < 6; i++){
      total += playerScores.player1[i]
   }
   if(total){
      p1Totals[0] = total
      if(total >= 65){
         p1Totals[1] = 35
      } else {
         p1Totals[1] = 0
      }
      p1Totals[2] = p1Totals[0] + p1Totals[1]
      for(let i = 0; i < 3; i++){
         p1ScoreCells[i].innerHTML = p1Totals[i]
      }
   }
}

function scoreBottomSection(){
   let p1ScoreCells = document.querySelectorAll('.p1T')
   let total = 0
   for(let i = 6; i < 13; i++){
      total += playerScores.player1[i]
   }
   if(yahtzeeScored > 1){
      p1Totals[3] = 100 * (yahtzeeScored - 1)
      p1ScoreCells[3].innerHTML = p1Totals[3]
   } else {
      p1Totals[3] = 0
   }
   if(total){
      p1Totals[4] = total + p1Totals[3]
      p1Totals[5] = p1Totals[2] + p1Totals[4]
      for(let i = 3; i < 5; i++){
         p1ScoreCells[i].innerHTML = p1Totals[i]
      }
      if(p1Totals[2]) p1ScoreCells[5].innerHTML = p1Totals[5]
   }
}

function calculateTotal(e){
   const tempHash = buildTempDiceHash()
   switch(e.target.id){
      case 'ones': score = tempHash['1']
      index = 0
      break
      case 'twos': score = 2 * tempHash['2']
      index = 1
      break
      case 'threes': score = 3 * tempHash['3']
      index = 2
      break
      case 'fours': score = 4 * tempHash['4']
      index = 3
      break
      case 'fives': score = 5 * tempHash['5']
      index = 4
      break
      case 'sixes': score = 6 * tempHash['6']
      index = 5
      break
      case 'threeOfKind': score = addAllDice()
      index = 6
      break
      case 'fourOfKind': score = addAllDice()
      index = 7
      break
      case 'fullHouse': score = 25
      index = 8
      break
      case 'smallStraight': score = 30
      index = 9
      break
      case 'largeStraight': score = 40
      index = 10
      break
      case 'yahtzee': score = 50
      index = 11
      break
      case 'chance': score = addAllDice()
      index = 12
      break
   }
   if(allowCut){
      score = 0
      warnBeforeCut(index)
   } else {
      showScore(score)
   }
}

function printScoreSheet(){
   let p1Scores = document.querySelectorAll('.p1')
   for(let i = 0; i < p1Scores.length; i++){
      if(playerScores.player1[i] != undefined){
         p1Scores[i].innerHTML = playerScores.player1[i]
      } 
   }
}

function updatePlayerScores(index, score){
   if(scoreIsAvailable(index)){
      playerScores.player1[index] = score
   }
}

function buildPlayerScoresArray(){
   for(let i = 0; i < 13; i++){
      playerScores.player1[i] = undefined
   }
}

function resetTurnScore(){
   index = undefined
   score = undefined
   let totalDisplay = document.querySelector('#total')
   totalDisplay.innerHTML = ''
}

function showScore(score){
   let totalDisplay = document.querySelector('#total')
   totalDisplay.innerHTML = 'You will score: ' + score
}

function warnBeforeCut(index){
   let totalDisplay = document.querySelector('#total')
   totalDisplay.innerHTML = 'Are you sure?'
}

function toggleKeepDice(i, e){
   !dice[i].keep ? dice[i].keep = true : dice[i].keep = false
   e.target.classList.toggle('keep')
}

function rollAvailableDice(){
   for(let i = 0; i < dice.length; i++){
      if(!dice[i].keep){
         dice[i].value = (Math.floor(Math.random()*6)+1)
         // dice[i].value = 1 YAHTZEE
         diceButtons[i].innerHTML = dice[i].value
      } 
   }
}

function resetDiceArray(){
   for(let i = 0; i < dice.length; i++){
      dice[i].value = null
      dice[i].keep = false
      diceButtons[i].innerHTML = ""
      diceButtons[i].classList.remove('keep')
   }
}

function resetRollsRemaining(){
   rollsRemaining = 3
   document.querySelector('#rolls').innerHTML = rollsRemaining
   document.querySelector('#total').innerHTML = ''
}

function disableScoreButtons(){
   let scoringButtons = document.querySelectorAll('.scoringButtons')
   for(let i = 0; i < scoringButtons.length; i++){
      scoringButtons[i].classList.remove('availableScoreLower')
      scoringButtons[i].classList.remove('availableScoreUpper')
      scoringButtons[i].classList.remove('cutScore')
      scoringButtons[i].disabled = true
   }
}

function buildTempDiceHash(){
   const tempDiceHash = {}
   for(let i = 0; i < dice.length; i++){
      tempDiceHash[dice[i].value] = (tempDiceHash[dice[i].value] || 0) + 1  
   }
   return tempDiceHash
}

function addAllDice(){
   let score = 0
   for(let i = 0; i < dice.length; i++){
      score += dice[i].value
   }
   return score
}

function enableScoringButton(button, section){
   let allButtons = document.querySelectorAll('.scoringButtons')
   if(scoreIsAvailable(button)){
      allButtons[button].disabled = false
      allButtons[button].classList.add('availableScore' + section)
   }
}

function scoreIsAvailable(index){
   return playerScores.player1[index] === undefined
}

//ALL SCORE-CHECKING FUNCTIONS BELOW

function checkPossibleScores(){
   disableScoreButtons()
   const tempHash = buildTempDiceHash()
   enableScoringButton(12, 'Lower')
   checkForNumbers(tempHash)
   checkForSmallStraight(tempHash)
   checkForLargeStraight(tempHash)
   checkForRuns(tempHash)
}

function checkForNumbers(tempHash){
   for(let key of Object.keys(tempHash)){
      switch(key){
         case '1': enableScoringButton(0, 'Upper')
         break
         case '2': enableScoringButton(1, 'Upper')
         break
         case '3': enableScoringButton(2, 'Upper')
         break
         case '4': enableScoringButton(3, 'Upper')
         break
         case '5': enableScoringButton(4, 'Upper')
         break
         case '6': enableScoringButton(5, 'Upper')
         break
      }
   }
}

function disableLowerScoreButtons(){
   let scoringButtons = document.querySelectorAll('.scoringButtons')
   for(let i = 6; i < 13; i++){
      scoringButtons[i].classList.remove('availableScoreLower')
      scoringButtons[i].classList.remove('availableScoreUpper')
      scoringButtons[i].classList.remove('cutScore')
      scoringButtons[i].disabled = true
   }
}

function checkForRuns(tempHash){
   for(let value of Object.values(tempHash)){
      if(value >= 3) enableScoringButton(6, 'Lower')
      if(value >= 4) enableScoringButton(7, 'Lower')
      if(value === 5){
         yahtzeeScored ++
         enableScoringButton(11, 'Lower')
         if(yahtzeeScored > 1){
            if(scoreIsAvailable(Object.keys(tempHash)[0])){
               disableLowerScoreButtons() 
            } else {
               for(let i = 8; i < 11; i++){
                  if(scoreIsAvailable(i)){
                     let allButtons = document.querySelectorAll('.scoringButtons')
                     allButtons[i].disabled = false
                     allButtons[i].classList.add('availableScoreLower')
                  }
               }
            }
         }
      }
      if(value === 3 && Object.entries(tempHash).length === 2){
         enableScoringButton(8, 'Lower')
      }
   }
}

function checkForSmallStraight(tempHash){
   let keys = Object.keys(tempHash)
   if(keys.length >= 4){
      if(
         (keys[0] === '1' && keys[3] === '4') || 
         (keys[0] === '2' && keys[3] === '5') ||
         (keys[0] === '3' && keys[3] === '6') ||
         (keys[1] === '3' && keys[4] === '6')
      ) enableScoringButton(9, 'Lower')
   }
}

function checkForLargeStraight(tempHash){
   let keys = Object.keys(tempHash)
   if(keys.length === 5){
      if(
         (keys[0] === '1' && keys[4] === '5') ||
         (keys[0] === '2' && keys[4] === '6')
      ) enableScoringButton(10, 'Lower')
   }
}

// function sum(a, b) {
//    return a + b;
//  }

// module.exports = {
//    testForSmallStraight,
//    testForLargeStraight,
//    sum
// }

//GLOBALS

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
let allowCut = false

class player {
   constructor(){
      this.yahtzeeScored = 0
      this.turnsRemaining = 13
      this.scores = []
      this.totals = []
   }
   buildScoresArr(){
      for(let i = 0; i < 13; i++){
         this.scores[i] = undefined
      }
   }
   buildInitialTotalsArr(){
      for(let i = 0; i < 6; i++){
         this.totals[i] = undefined  
      }
   }
}

let p1 = new player()

p1.buildScoresArr()
p1.buildInitialTotalsArr()

let p2 = null
// p2.buildScoresArr()
// p2.buildInitialTotalsArr()

let activePlayer = p1


//===== MAIN GAME FUNCTIONALITY ================


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

function endTurn(){
   if(allowCut) cutScore(index)
   resetDiceArray()
   resetRollsRemaining()
   updatePlayerScores(index, score)
   scoreTopSection()
   scoreBottomSection()
   printScoreSheet()
   disableOtherButtons()
   disableScoreButtons()
   enableRollButton()
   decrementTurn()
   allowCut = false
   if(p2) toggleActivePlayer()
}

function allowCutScore(){
   if(activePlayer.rollsRemaining === 3) return
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

function setPlayer(){
   let player = 'p1'
   if(activePlayer === p2){
      player = 'p2'
   }
   return player
}

function scoreIsAvailable(index){
   return activePlayer.scores[index] === undefined
}

function toggleActivePlayer(){
   let headers = document.querySelectorAll('th')
   if(activePlayer === p1){
      activePlayer = p2
   } else {
      activePlayer = p1
   }
   headers[1].classList.toggle('activePlayer')
   headers[0].classList.toggle('activePlayer')
}

function decrementTurn(){
   activePlayer.turnsRemaining --
   if(p2){
      let winner
      if(p1.totals[5] > p2.totals[5]){
         winner = 'Player 1'
      } else {
         winner = 'Player 2'
      }
      if(p2.turnsRemaining === 0){
         alert(winner + ' wins! Refresh to start again')
      } 
   } else if(activePlayer.turnsRemaining === 0){
      alert('Game over! Your score was ' + activePlayer.totals[5] + '. Refresh to play again!' )
   }
}

function scoreTopSection(){
   let player = setPlayer()
   let scoreCells = document.querySelectorAll('.' + player + 'T')
   let total = 0
   for(let i = 0; i < 6; i++){
      total += activePlayer.scores[i]
   }
   if(total){
      activePlayer.totals[0] = total
      if(total >= 63){
         activePlayer.totals[1] = 35
      } else {
         activePlayer.totals[1] = 0
      }
      activePlayer.totals[2] = activePlayer.totals[0] + activePlayer.totals[1]
      for(let i = 0; i < 3; i++){
         scoreCells[i].innerHTML = activePlayer.totals[i]
      }
   }
}

function scoreBottomSection(){
   let player = setPlayer()

   let scoreCells = document.querySelectorAll('.' + player + 'T')
   let total = 0
   for(let i = 6; i < 13; i++){
      total += activePlayer.scores[i]
   }
   if(activePlayer.yahtzeeScored > 1){
      activePlayer.totals[3] = 100 * (activePlayer.yahtzeeScored - 1)
      scoreCells[3].innerHTML = activePlayer.totals[3]
   } else {
      activePlayer.totals[3] = 0
   }
   if(total){
      activePlayer.totals[4] = total + activePlayer.totals[3]
      activePlayer.totals[5] = activePlayer.totals[2] + activePlayer.totals[4]
      for(let i = 3; i < 5; i++){
         scoreCells[i].innerHTML = activePlayer.totals[i]
      }
      if(activePlayer.totals[2]){
         scoreCells[5].innerHTML = activePlayer.totals[5]
      } 
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
   enableConfirmButton()
}

function updatePlayerScores(index, score){
   if(scoreIsAvailable(index)){
      activePlayer.scores[index] = score
      if(score === 50) activePlayer.yahtzeeScored = 1
   }
}

function toggleKeepDice(i, e){
   !dice[i].keep ? dice[i].keep = true : dice[i].keep = false
   e.target.classList.toggle('keep')
}

function rollAvailableDice(){
   for(let i = 0; i < dice.length; i++){
      if(!dice[i].keep){
         dice[i].value = (Math.floor(Math.random()*6)+1)
      }
      diceButtons[i].innerHTML = dice[i].value
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

function handleBonusYahtzee(){
   if(activePlayer.yahtzeeScored > 0){
      activePlayer.yahtzeeScored ++
      if(scoreIsAvailable(dice[0].value -1)){ 
         disableLowerScoreButtons() 
      } else {
         enableAvailableLowerScoreButtons()
      }
   }
}

//ALL SCORE-CHECKING FUNCTIONS BELOW

function checkPossibleScores(){
   disableScoreButtons()
   const tempHash = buildTempDiceHash()
   enableScoringButton(12, 'Lower')
   checkForNumbers(tempHash)
   checkForSmallStraight(tempHash)
   checkForLargeStraight(tempHash)
   checkForFullHouse(tempHash)
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

function checkForRuns(tempHash){
   for(let value of Object.values(tempHash)){
      if(value >= 3) enableScoringButton(6, 'Lower')
      if(value >= 4) enableScoringButton(7, 'Lower')
      if(value === 5){
         enableScoringButton(11, 'Lower')
         handleBonusYahtzee()
      }
   }
}

function checkForFullHouse(tempHash){
   for(let value of Object.values(tempHash)){
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

//========DOM MANIPULATION FUNCTIONS============================

function adjustRollsRemaining(){
   rollsRemaining --
   let rollsDisplay = document.querySelector('#rolls')
   rollsDisplay.innerHTML = rollsRemaining
   if(rollsRemaining === 0) disableRollButton()
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

function resetRollsRemaining(){
   rollsRemaining = 3
   document.querySelector('#rolls').innerHTML = rollsRemaining
   document.querySelector('#total').innerHTML = ''
}

function disableOtherButtons(){
   document.querySelector('#cutScore').disabled = true
   document.querySelector('#confirm').disabled = true
}

function enableCutScoreButton(){
   document.querySelector('#cutScore').disabled = false
}

function enableConfirmButton(){
   document.querySelector('#confirm').disabled = false
}

function disableRollButton(){
   document.querySelector('#roll').disabled = true
}

function enableRollButton(){
   document.querySelector('#roll').disabled = false
}

function cutScore(index){
   let player = setPlayer()

   let allCells = document.querySelectorAll('.' + player)
   allCells[index].classList.add('blackout')
}

function printScoreSheet(){
   let player = setPlayer()

   let scores = document.querySelectorAll('.' + player)
   for(let i = 0; i < activePlayer.scores.length; i++){
      if(activePlayer.scores[i] != undefined){
         scores[i].innerHTML = activePlayer.scores[i]
      } 
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

function disableScoreButtons(){
   let scoringButtons = document.querySelectorAll('.scoringButtons')
   for(let i = 0; i < scoringButtons.length; i++){
      scoringButtons[i].classList.remove('availableScoreLower')
      scoringButtons[i].classList.remove('availableScoreUpper')
      scoringButtons[i].classList.remove('cutScore')
      scoringButtons[i].disabled = true
   }
}

function enableScoringButton(button, section){
   let allButtons = document.querySelectorAll('.scoringButtons')
   if(scoreIsAvailable(button)){
      allButtons[button].disabled = false
      allButtons[button].classList.add('availableScore' + section)
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

function enableAvailableLowerScoreButtons(){
   for(let i = 6; i < 11; i++){
      let allButtons = document.querySelectorAll('.scoringButtons')
      if(scoreIsAvailable(i)){
         allButtons[i].disabled = false
         allButtons[i].classList.add('availableScoreLower')
      }
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
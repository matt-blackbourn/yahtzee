
//GLOBALS

class Player {
   constructor(){
      this.yahtzeeScored = 0
      this.turnsRemaining = 13
      this.scores = buildScoresArr()
      this.totals = buildInitialTotalsArr()
   } 
}

const scoringButtons = document.querySelectorAll('.scoringButtons')
let score
let index
let allowCut = false
// let twoPlayer = false
let p1 = new Player()
let p2 = new Player()
let activePlayer = p1


//=========EVENT LISTENERS=============


//SCORING BUTTONS
for(let i = 0; i < scoringButtons.length; i ++){
   scoringButtons[i].addEventListener('click', calculateTotal)
}

//MONITOR NUMBER OF PLAYERS
let playerMode = document.querySelector('#two-player')
playerMode.addEventListener('change', changeMode)


//===== MAIN GAME FUNCTIONALITY ================


function roll(){
   enableCutScoreButton()
   if(rollsRemaining > 0){
      resetTurnScore()
      rollAvailableDice()
      checkPossibleScores()
      // adjustRollsRemaining()
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
   disableScoreButtons()
   disableOtherButtons()
   enableRollButton()
   decrementTurn()
   allowCut = false
   if(twoPlayer) toggleActivePlayer()
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

function changeMode(){
   playerMode.value === '2' ? twoPlayer = true : twoPlayer = false
   resetGame()
}


//========== MAIN FUNCTION SECTION ENDS =============


//=============HELPER FUNCTIONS=======================

function resetGame(){
   rollsRemaining = 3
   p1 = new Player
   p2 = new Player
   allowCut = false
   score = undefined
   index = undefined
   activePlayer = p1
   highlightActivePlayer()
   resetRollsRemaining()
   disableScoreButtons()
   disableOtherButtons()
   enableRollButton()
   resetDiceArray()
   clearScores()
   clearTotals()
   switchHeaders()
}

function buildScoresArr(){
   let arr = []
   for(let i = 0; i < 13; i++){
      arr[i] = undefined
   }
   return arr
}

function buildInitialTotalsArr(){
   let arr = []
   for(let i = 0; i < 6; i++){
      arr[i] = undefined  
   }
   return arr
}

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
   if(activePlayer === p1){
      activePlayer = p2
   } else {
      activePlayer = p1
   }
   highlightActivePlayer()
}

function decrementTurn(){
   activePlayer.turnsRemaining --
   if(twoPlayer){
      let winner
      if(p1.totals[5] > p2.totals[5]){
         winner = 'Player 1'
      } else {
         winner = 'Player 2'
      }
      if(p2.turnsRemaining === 0){
         alert(winner + ' wins! Refresh to start again')
      } 
   } else if(activePlayer.totals[5]){
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
      case 'chance': 
      default:
         score = addAllDice()
         index = 12
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


function resetDiceArray(){
   for(let i = 0; i < dice.length; i++){
      dice[i].value = null
      dice[i].keep = false
      diceButtons[i].innerHTML = ""
      diceButtons[i].classList.remove('keep')
   }
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


//========DOM MANIPULATION FUNCTIONS============================

//=================2 PLAYER STUFF==========================

function switchHeaders(){
   let headers = document.querySelectorAll('th')
   if(twoPlayer){
      headers[1].classList.remove('hide')
      headers[0].innerHTML = 'Player 1'
   } else {
      headers[1].classList.add('hide')
      headers[0].classList.remove('activePlayer')
      headers[0].innerHTML = 'Your Scores'
   }
}

function clearTotals(){
   let p1Totals = document.querySelectorAll('.p1T')
   let p2Totals = document.querySelectorAll('.p2T')
   for(let i = 0; i < p1Totals.length; i++){
      p1Totals[i].innerHTML = ''
      p2Totals[i].innerHTML = ''
      if(twoPlayer){
         p2Totals[i].classList.remove('hide')
      } else {
         p2Totals[i].classList.add('hide')
      }
   }
}

function clearScores(){
   let p1Scores = document.querySelectorAll('.p1')
   let p2Scores = document.querySelectorAll('.p2')
   for(let i = 0; i < p1Scores.length; i++){
      p1Scores[i].innerHTML = ''
      p2Scores[i].innerHTML = ''
      p1Scores[i].classList.remove('blackout')
      p2Scores[i].classList.remove('blackout')
      if(twoPlayer){
         p2Scores[i].classList.remove('hide')
      } else {
         p2Scores[i].classList.add('hide')
      }
   }
}

function highlightActivePlayer(){
   let headers = document.querySelectorAll('th')
   if(activePlayer == p1){
      headers[0].classList.add('activePlayer')
      headers[1].classList.remove('activePlayer')
   } else {
      headers[1].classList.add('activePlayer')
      headers[0].classList.remove('activePlayer')
   }
}

//===============2 PLAYER ENDS===========================


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


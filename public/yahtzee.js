
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
   if(rollsRemaining > 0){
      rollAvailableDice()
      checkPossibleScores()
      rollsRemaining --
      let rollsDisplay = document.querySelector('#rolls')
      rollsDisplay.innerHTML = rollsRemaining
   }
}

function endTurn(){
   if(rollsRemaining > 0){
      alert('Use all your rolls first!')
   } else {
      resetDiceArray()
      resetRollsRemaining()
      disableScoreButtons()
      printScoreSheet()
   }
}

const playerScores = {
   'player1': [0,0,0,0,0,0]
}

function printScoreSheet(){
   let p1Scores = document.querySelectorAll('.p1')
   for(let i = 0; i < p1Scores.length; i++){
      p1Scores[i].innerHTML = playerScores.player1[i]
   }
}

function calculateTotal(e){
   const tempHash = buildTempDiceHash()
   let score = 0
   switch(e.target.id){
      case 'ones': score = tempHash['1']
      playerScores.player1[0] = score
      break
      case 'twos': score = 2 * tempHash['2']
      playerScores.player1[1] = score
      break
      case 'threes': score = 3 * tempHash['3']
      playerScores.player1[2] = score
      break
      case 'fours': score = 4 * tempHash['4']
      playerScores.player1[3] = score
      break
      case 'fives': score = 5 * tempHash['5']
      playerScores.player1[4] = score
      break
      case 'sixes': score = 6 * tempHash['6']
      playerScores.player1[5] = score
      break
      case 'threeOfKind': score = addAllDice()
      break
      case 'fourOfKind': score = addAllDice()
      break
      case 'fullHouse': score = 25
      break
      case 'smallStraight': score = 30
      break
      case 'largeStraight': score = 40
      break
      case 'yahtzee': score = 50
      break
      case 'chance': score = addAllDice()
      break
   }
   showScore(score)
}
//========== MAIN FUNCTION SECTION ENDS =============


//=============HELPER FUNCTIONS=======================

function toggleKeepDice(i, e){
   !dice[i].keep ? dice[i].keep = true : dice[i].keep = false
   e.target.classList.toggle('keep')
}

function rollAvailableDice(){
   for(let i = 0; i < dice.length; i++){
      if(!dice[i].keep){
         dice[i].value = (Math.floor(Math.random()*6)+1)
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
      scoringButtons[i].classList.remove('availableScoreYahtzee')
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

function enableScoringButton(button, section){
   let scoreButton = document.querySelector('#' + button)
   scoreButton.disabled = false
   scoreButton.classList.add('availableScore' + section)
}

function addAllDice(){
   let score = 0
   for(let i = 0; i < dice.length; i++){
      score += dice[i].value
   }
   return score
}

function showScore(score){
   let totalDisplay = document.querySelector('#total')
   totalDisplay.innerHTML = 'Your score will be: ' + score
}

function checkPossibleScores(){
   disableScoreButtons()
   const tempHash = buildTempDiceHash()
   checkForNumbers(tempHash)
   checkForRuns(tempHash)
   checkForSmallStraight(tempHash)
   checkForLargeStraight(tempHash)
   enableScoringButton('chance', 'Lower')
}

//ALL SCORE-CHECKING FUNCTIONS BELOW

function checkForNumbers(tempHash){
   for(let key of Object.keys(tempHash)){
      switch(key){
         case '1': enableScoringButton('ones', 'Upper')
         break
         case '2': enableScoringButton('twos', 'Upper')
         break
         case '3': enableScoringButton('threes', 'Upper')
         break
         case '4': enableScoringButton('fours', 'Upper')
         break
         case '5': enableScoringButton('fives', 'Upper')
         break
         case '6': enableScoringButton('sixes', 'Upper')
         break
      }
   }
}

function checkForRuns(tempHash){
   for(let value of Object.values(tempHash)){
      if(value >= 3) enableScoringButton('threeOfKind', 'Lower')
      if(value >= 4) enableScoringButton('fourOfKind', 'Lower')
      if(value === 5) enableScoringButton('yahtzee', 'Lower')
      if(value === 3 && Object.entries(tempHash).length === 2){
         enableScoringButton('fullHouse', 'Lower')
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
      ) enableScoringButton('smallStraight', 'Lower')
   }
}

function checkForLargeStraight(tempHash){
   let keys = Object.keys(tempHash)
   if(keys.length === 5){
      if(
         (keys[0] === '1' && keys[4] === '5') ||
         (keys[0] === '2' && keys[4] === '6')
      ) enableScoringButton('largeStraight', 'Lower')
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
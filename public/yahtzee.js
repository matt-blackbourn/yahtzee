const rollsDisplay = document.querySelector("#rolls")
const totalDisplay = document.querySelector("#total")

let rollsRemaining = 3
let dice = [
   {value: null, keep: false},
   {value: null, keep: false},
   {value: null, keep: false},
   {value: null, keep: false},
   {value: null, keep: false}
]

//ADD DICE EVENT LISTENERS
const diceButtons = document.querySelectorAll(".dice")
for(let i = 0; i < diceButtons.length; i++){
   diceButtons[i].addEventListener("click", function(e){
      if(rollsRemaining > 0 && rollsRemaining < 3) toggleKeepDice(i, e)
   })
}

//ADD SCORING BUTTON EVENT LISTENERS
const scoringOptions = document.querySelectorAll(".scoringOptions")
for(let i = 0; i < scoringOptions.length; i ++){
   scoringOptions[i].addEventListener("click", calculateTotal)
}

function roll(){
   if(rollsRemaining > 0){
      rollAvailableDice()
      checkPossibleScores()
      rollsRemaining --
      rollsDisplay.innerHTML = rollsRemaining
   }
}

function nextPlayer(){
   if(rollsRemaining > 0){
      alert("Use all your rolls first!")
   } else {
      resetDiceArray()
      resetRollsRemaining()
      disableScoreButtons()
   }
}

function checkPossibleScores(){
   disableScoreButtons()
   const tempHash = buildTempDiceHash()
   checkForNumbers(tempHash)
   checkForRuns(tempHash)
   checkForSmallStraight(tempHash)
   checkForLargeStraight(tempHash)
}

function calculateTotal(e){
   const tempHash = buildTempDiceHash()
   let score = 0
   if(e.target.id === "ones") score = tempHash["1"]
   if(e.target.id === "twos") score = 2 * tempHash["2"]
   if(e.target.id === "threes") score = 3 * tempHash["3"]
   if(e.target.id === "fours") score = 4 * tempHash["4"]
   if(e.target.id === "fives") score = 5 * tempHash["5"]
   if(e.target.id === "sixes") score = 6 * tempHash["6"]
   if(e.target.id === "fullHouse") score = 25
   if(e.target.id === "smallStraight") score = 30
   if(e.target.id === "largeStraight") score = 40
   if(e.target.id === "yahtzee") score = 50
   if(e.target.id === "threeOfKind" ||
      e.target.id === "fourOfKind"){
         for(let i = 0; i < dice.length; i++){
            score += dice[i].value
         }
      }
   totalDisplay.innerHTML = "Score is: " + score
}

//=============HELPER FUNCS=================

function toggleKeepDice(i, e){
   !dice[i].keep ? dice[i].keep = true : dice[i].keep = false
   e.target.classList.toggle("keep")
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
      diceButtons[i].classList.remove("keep")
   }
}

function resetRollsRemaining(){
   rollsRemaining = 3
   rollsDisplay.innerHTML = rollsRemaining
   totalDisplay.innerHTML = ""
}

function disableScoreButtons(){
   let scoringOptions = document.querySelectorAll(".scoringOptions")
   for(let i = 0; i < scoringOptions.length; i++){
      scoringOptions[i].classList.remove("availableScoreLower")
      scoringOptions[i].classList.remove("availableScoreUpper")
      scoringOptions[i].classList.remove("availableScoreYahtzee")
      scoringOptions[i].disabled = true
   }
}

function buildTempDiceHash(){
   const tempDiceHash = {}
   for(let i = 0; i < dice.length; i++){
      tempDiceHash[dice[i].value] = (tempDiceHash[dice[i].value] || 0) + 1  
   }
   return tempDiceHash
}

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
      if((keys[0] === "1" && keys[3] === "4") || 
         (keys[0] === "2" && keys[3] === "5") ||
         (keys[0] === "3" && keys[3] === "6") ||
         (keys[1] === "3" && keys[4] === "6")){
            enableScoringButton('smallStraight', 'Lower')
      }
   }
}

function checkForLargeStraight(tempHash){
   let keys = Object.keys(tempHash)
   if(keys.length === 5){
      if((keys[0] === "1" && keys[4] === "5") ||
         (keys[0] === "2" && keys[4] === "6")){
            enableScoringButton('largeStraight', 'Lower')
         }
   }
}

function enableScoringButton(button, section){
   const smallStraight = document.querySelector('#' + button)
   smallStraight.disabled = false
   smallStraight.classList.add('availableScore' + section)
}

// function sum(a, b) {
//    return a + b;
//  }

// module.exports = {
//    testForSmallStraight,
//    testForLargeStraight,
//    sum
// }
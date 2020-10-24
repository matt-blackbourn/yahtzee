document.addEventListener('DOMContentLoaded', startGame)

let diceButtons = document.querySelectorAll(".dice")
let rollsDisplay = document.querySelector("#rolls")
let totalDisplay = document.querySelector("#total")
let rollsRemaining = 3
let dice = []
let tempHash = {}

function startGame(){
   //event listeners
   for(let i = 0; i < diceButtons.length; i++){
      diceButtons[i].addEventListener("click", function(e){
         if(rollsRemaining < 3 && rollsRemaining > 0){
            !dice[i].keep ? dice[i].keep = true : dice[i].keep = false
            e.target.classList.toggle("keep")
         }
      })
   }
   //build dice array
   for(let i = 0; i < 5; i++){
      dice.push({keep: false, value: null})
   }
}

function roll(){
   if(rollsRemaining > 0){
      for(let i = 0; i < dice.length; i++){
         if(!dice[i].keep){
            dice[i].value = (Math.floor(Math.random()*6)+1)
            diceButtons[i].innerHTML = dice[i].value
         } 
      }
      rollsRemaining --
      rollsDisplay.innerHTML = rollsRemaining
   }
  
   checkAvailableScores()
}

function reset(){
   if(rollsRemaining > 0){
      return alert("Use all your rolls first!")
   }
   //reset dice array
   for(let i = 0; i < dice.length; i++){
      dice[i].value = null
      dice[i].keep = false
      diceButtons[i].innerHTML = ""
      diceButtons[i].classList.remove("keep")
   }
   //reset rolls remaining
   rollsRemaining = 3
   rollsDisplay.innerHTML = rollsRemaining
   totalDisplay.innerHTML = ""

   resetScoringButtons()
}

function resetScoringButtons(){
   let scoringOptions = document.querySelectorAll(".scoringOptions")
   for(let i = 0; i < scoringOptions.length; i++){
      scoringOptions[i].classList.remove("availableScoreLower")
      scoringOptions[i].classList.remove("availableScoreUpper")
      scoringOptions[i].classList.remove("availableScoreYahtzee")
      scoringOptions[i].disabled = true
   }
}

function checkAvailableScores(){
   resetScoringButtons()
   tempHash = {}
   for(let i = 0; i < dice.length; i++){
      tempHash[dice[i].value] = (tempHash[dice[i].value] || 0) + 1  
   }
   let keys = Object.keys(tempHash)
   //small straight test
   if(keys.length >= 4){
      if((keys[0] === "1" && keys[3] === "4") || 
         (keys[0] === "2" && keys[3] === "5") ||
         (keys[0] === "3" && keys[3] === "6") ||
         (keys[1] === "3" && keys[4] === "6")){
            let smallStraight = document.querySelector("#smallStraight")
            smallStraight.disabled = false
            smallStraight.classList.add("availableScoreLower")
      }
   }
   //large straight test
   if(keys.length === 5){
      if((keys[0] === "1" && keys[4] === "5") ||
         (keys[0] === "2" && keys[4] === "6")){
            let largeStraight = document.querySelector("#largeStraight")
            largeStraight.disabled = false
            largeStraight.classList.add("availableScoreLower")
         }
   }
   
   for(let [key, value] of Object.entries(tempHash)){
      if(key === "1"){
         let ones = document.querySelector("#ones")
         ones.disabled = false
         ones.classList.add("availableScoreUpper")
      }
      if(key === "2"){
         let twos = document.querySelector("#twos")
         twos.disabled = false
         twos.classList.add("availableScoreUpper")
      }
      if(key === "3"){
         let threes = document.querySelector("#threes")
         threes.disabled = false
         threes.classList.add("availableScoreUpper")
      }
      if(key === "4"){
         let fours = document.querySelector("#fours")
         fours.disabled = false
         fours.classList.add("availableScoreUpper")
      }
      if(key === "5"){
         let fives = document.querySelector("#fives")
         fives.disabled = false
         fives.classList.add("availableScoreUpper")
      }
      if(key === "6"){
         let sixes = document.querySelector("#sixes")
         sixes.disabled = false
         sixes.classList.add("availableScoreUpper")
      }
      if(value >= 3){
         let threeOfKind = document.querySelector("#threeOfKind")
         threeOfKind.disabled = false
         threeOfKind.classList.add("availableScoreLower")
      }
      if(value >= 4){
         let fourOfKind = document.querySelector("#fourOfKind")
         fourOfKind.disabled = false
         fourOfKind.classList.add("availableScoreLower")
      }
      if(value === 3 && Object.entries(tempHash).length === 2){
         let fullHouse = document.querySelector("#fullHouse")
         fullHouse.disabled = false
         fullHouse.classList.add("availableScoreLower")
      }
      if(value === 5){
         let yahtzee = document.querySelector("#yahtzee")
         yahtzee.disabled = false
         yahtzee.classList.add("availableScoreYahtzee")
      }
   }
   let scoringOptions = document.querySelectorAll(".scoringOptions")
   for(let i = 0; i < scoringOptions.length; i ++){
      scoringOptions[i].addEventListener("click", total)
   }
}

function total(e){
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

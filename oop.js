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
let p2 = new player()

p1.buildScoresArr()
p2.buildScoresArr()
p1.buildInitialTotalsArr()
p2.buildInitialTotalsArr()
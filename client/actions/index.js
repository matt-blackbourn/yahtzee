
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const GET_HIGHSCORES = 'GET_HIGHSCORES'
export const DICE_HELD = 'DICE_HELD'
export const ROLLED_DICE = 'ROLLED_DICE'
export const ROLL_COUNT_REDUCED = 'ROLL_COUNT_REDUCED'
export const TEMP_DICE_HASH_BUILT = 'TEMP_DICE_HASH_BUILT'
export const SCORING_BUTTONS_ENABLED = 'SCORING_BUTTONS_ENABLED'
export const SCORE_CALCULATED = 'SCORE_CALCULATED'

//dice actions

export const holdDice = dice => {
   return {
      type: DICE_HELD,
      dice
   }
}

export const rollDice = dice => {
   return {
      type: ROLLED_DICE,
      dice
   }
}

export const buildHash = hash => {
   return {
      type: TEMP_DICE_HASH_BUILT,
      hash
   }
}

//scoring actions

export const rollScored = score => {
  return {
    type: SCORE_CALCULATED,
    score
  }
}

export const scoringButtonsEnabled = buttons => {
   return {
      type: SCORING_BUTTONS_ENABLED,
      buttons
   }
}

export const reduceRollsRemaining = () => {
   return {
      type: ROLL_COUNT_REDUCED
   }
}

export const changePage = change => {
   return {
      type: CHANGE_PAGE,
      gamePageShowing: change
   }
}

export const getHighScores = scores => {
   return {
      type: GET_HIGHSCORES,
      scores
   }
}



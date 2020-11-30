
export const RESET = 'RESET'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const GET_HIGHSCORES = 'GET_HIGHSCORES'
export const DICE_HELD = 'DICE_HELD'
export const ROLLED_DICE = 'ROLLED_DICE'
export const ROLL_COUNT_REDUCED = 'ROLL_COUNT_REDUCED'
export const TEMP_DICE_HASH_BUILT = 'TEMP_DICE_HASH_BUILT'
export const SCORING_BUTTONS_ENABLED = 'SCORING_BUTTONS_ENABLED'
export const SCORE_CALCULATED = 'SCORE_CALCULATED'
export const SCORECARD_UPDATED = 'SCORECARD_UPDATED'
export const CUT_SCORE_BUTTON_ENABLED = 'CUT_SCORE_BUTTON_ENABLED'
export const CUT_SCORE_BUTTON_DISABLED = 'CUT_SCORE_BUTTON_DISABLED'
export const UPPER_TOTAL_UPDATED = 'UPPER_TOTAL_UPDATED'
export const LOWER_TOTAL_UPDATED = 'LOWER_TOTAL_UPDATED'
export const POSSIBLE_CUT_SCORES_ADDED = 'POSSIBLE_CUT_SCORES_ADDED'
export const CUT_SCORES_ALLOWED = 'CUT_SCORES_ALLOWED'
export const CUT_SCORES_DISALLOWED = 'CUT_SCORES_DISALLOWED'
export const RESET_ROLL_SCORE = 'RESET_ROLL_SCORE'
export const BONUS_YAHTZEE_SCORED = 'BONUS_YAHTZEE_SCORED'

//dice actions

export const holdDice = dice => {
   return {
      type: DICE_HELD,
      dice
   }
}

export const resetRollScore = () => {
   return {
      type: RESET_ROLL_SCORE
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

export const rollScored = (button, score) => {
  return {
    type: SCORE_CALCULATED,
    button,
    score
  }
}

export const scoringButtonsEnabled = buttons => {
   return {
      type: SCORING_BUTTONS_ENABLED,
      buttons
   }
}

export const updateUpperTotal = (value, print) => {
   return {
      type: UPPER_TOTAL_UPDATED,
      value,
      print
   }
}

export const updateLowerTotal = (value, print) => {
   return {
      type: LOWER_TOTAL_UPDATED,
      value,
      print
   }
}

export const updateScoreCard = (key, value) => {
  return {
    type: SCORECARD_UPDATED,
    key,
    value
  }
}

export const endTurn = () => {
  return {
    type: RESET
  }
}

export const enableCutScoreButton = () => {
  return {
    type: CUT_SCORE_BUTTON_ENABLED
  }
}

export const disableCutScoreButton = () => {
  return {
    type: CUT_SCORE_BUTTON_DISABLED
  }
}

export const reduceRollsRemaining = () => {
   return {
      type: ROLL_COUNT_REDUCED
   }
}

export const scoreBonusYahtzee = () => {
   return {
      type: BONUS_YAHTZEE_SCORED
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

export const availableToCut = scores => {
   return {
      type: POSSIBLE_CUT_SCORES_ADDED,
      scores
   }
}

export const allowCutScores = () => {
   return {
      type: CUT_SCORES_ALLOWED
   }
}

export const disallowCutScores = () => {
   return {
      type: CUT_SCORES_DISALLOWED
   }
}



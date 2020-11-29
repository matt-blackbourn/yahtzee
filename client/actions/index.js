
export const TURN_ENDED = 'TURN_ENDED'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const GET_HIGHSCORES = 'GET_HIGHSCORES'
export const DICE_HELD = 'DICE_HELD'
export const ROLLED_DICE = 'ROLLED_DICE'
export const ROLL_COUNT_REDUCED = 'ROLL_COUNT_REDUCED'
export const TEMP_DICE_HASH_BUILT = 'TEMP_DICE_HASH_BUILT'
export const SCORING_BUTTONS_ENABLED = 'SCORING_BUTTONS_ENABLED'
export const SCORE_CALCULATED = 'SCORE_CALCULATED'
export const SCORECARD_UPDATED = 'SCORECARD_UPDATED'
export const CONFIRM_ENABLED = 'CONFIRM_ENABLED'
export const CONFIRM_DISABLED = 'CONFIRM_DISABLED'
export const CUT_ENABLED = 'CUT_ENABLED'
export const CUT_DISABLED = 'CUT_DISABLED'
export const UPPER_TOTAL_UPDATED = 'UPPER_TOTAL_UPDATED'

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

export const updateScoreCard = (key, value) => {
  return {
    type: SCORECARD_UPDATED,
    key,
    value
  }
}

export const confirmEnabled = () => {
  return {
    type: CONFIRM_ENABLED
  }
}

export const confirmDisabled = () => {
  return {
    type: CONFIRM_DISABLED
  }
}

export const endTurn = () => {
  return {
    type: TURN_ENDED
  }
}

export const cutEnabled = () => {
  return {
    type: CUT_ENABLED
  }
}

export const cutDisabled = () => {
  return {
    type: CUT_DISABLED
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



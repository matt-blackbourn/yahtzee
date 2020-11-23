
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const GET_HIGHSCORES = 'GET_HIGHSCORES'
export const KEEP_DICE = 'KEEP_DICE'
export const ROLL_DICE = 'ROLL_DICE'
export const REDUCE_ROLLS = 'REDUCE_ROLLS'
export const BUILD_HASH = 'BUILD_HASH'

//dice actions

export const keep = dice => {
   return {
      type: KEEP_DICE,
      dice
   }
}

export const roll = dice => {
   return {
      type: ROLL_DICE,
      dice
   }
}

export const buildHash = hash => {
   return {
      type: BUILD_HASH,
      hash
   }
}

export const reduceRollsRemaining = (rolls) => {
   return {
      type: REDUCE_ROLLS,
      rollsRemaining: rolls
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



import { ROLLED_DICE, DICE_HELD, RESET, GAME_RESTARTED } from "../actions"

const generateDiceArray = () => {
  let arr = []
  for (let i = 0; i < 5; i++) {
    arr[i] = { value: null, keep: false, class: '' }
  }
  return arr
}


function reducer(state = generateDiceArray(), action) {
  switch (action.type) {
    case ROLLED_DICE:
      return action.dice

    case DICE_HELD:
      return action.dice

    case RESET:
      return generateDiceArray()

    case GAME_RESTARTED:
      return generateDiceArray()

    default:
      return state
  }
}

export default reducer

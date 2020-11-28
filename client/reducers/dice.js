import { ROLLED_DICE, DICE_HELD, TURN_ENDED } from "../actions"

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
    case TURN_ENDED:
      return generateDiceArray()
    default:
      return state
  }
}

export default reducer

import { ROLLED_DICE, KEEP_DICE } from "../actions"

const generateDiceArray = () => {
   let arr = []
   for(let i = 0; i < 5; i++){
      arr[i] = {value: null, keep: false, class: ''}
   }
   return arr
}

const initialState = generateDiceArray()

function reducer(state = initialState, action){
   switch(action.type){
      case ROLLED_DICE:
         return action.dice
      case KEEP_DICE:
         return action.dice
      default:
         return state
   }
}

export default reducer


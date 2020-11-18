
function generateDiceArray() {
   let arr = []
   for(let i = 0; i < 5; i++){
      arr[i] = {value: null, keep: false, class: ''}
   }
   return arr
}

const initialState = generateDiceArray()

function reducer(state = initialState, action){
   switch(action.type){
      default:
         return state
   }
}

export default reducer
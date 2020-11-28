const initialState = {
  ones: 0,
  twos: 0,
  threes: 0,
  fours: 0,
  fives: 0,
  sixes: 0,
  total: 0,
  bonus: 0,
  upperTotal: 0,
  threeOfKind: 0,
  fourOfKind: 0,
  fullHouse: 0,
  smSraight: 0,
  lgStraight: 0,
  yahtzee: 0,
  chance: 0,
  bonusYahtzee: 0,
  lowerTotal: 0,
  grandTotal: 0
}

function reducer(state = initialState, action){
  switch(action.type){
    default: 
      return state
  }
}

export default reducer
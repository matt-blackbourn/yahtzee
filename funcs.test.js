const funcs = require('./public/yahtzee.js')

test('adds 1 + 2 to equal 3', () => {
  expect(funcs.sum(1, 2)).toBe(3)
})

//SMALL STRAIGHT
test('positive small straight test', () => {
   const diceHash = {
      1: 1,
      2: 2,
      3: 1,
      4: 1
   }
   const actual = funcs.testForSmallStraight(diceHash)
   expect(actual).toEqual(true)
 })

 test('negtive small straight test', () => {
   const diceHash = {
      1: 1,
      2: 2,
      3: 1,
      5: 1
   }
   const actual = funcs.testForSmallStraight(diceHash)
   expect(actual).toEqual(undefined)
 })
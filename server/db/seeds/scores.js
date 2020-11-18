
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {
            name: 'Ash', 
            ones: 3,
            twos: 8,
            threes: 0,
            fours: 20,
            fives: 15,
            sixes: 18,
            total: 64,
            bonus: 35,
            upperTotal: 99,
            threeOfKind: 29,
            fourOfKind: 26,
            fullHouse: 25,
            smStraight: 30,
            lgStraight: 40,
            yahtzee: 50,
            chance: 20,
            bonusYahtzee: 300,
            lowerTotal: 520,
            grandTotal: 619
         },
        {
            name: 'Smitty', 
            ones: 5,
            twos: 10,
            threes: 9,
            fours: 4,
            fives: 10,
            sixes: 18,
            total: 56,
            bonus: 0,
            upperTotal: 56,
            threeOfKind: 25,
            fourOfKind: 25,
            fullHouse: 25,
            smStraight: 30,
            lgStraight: 40,
            yahtzee: 50,
            chance: 21,
            bonusYahtzee: 300,
            lowerTotal: 516,
            grandTotal: 572
         },
        {
            name: 'Blackie', 
            ones: 1,
            twos: 6,
            threes: 12,
            fours: 16,
            fives: 15,
            sixes: 24,
            total: 74,
            bonus: 35,
            upperTotal: 109,
            threeOfKind: 22,
            fourOfKind: 25,
            fullHouse: 25,
            smStraight: 30,
            lgStraight: 40,
            yahtzee: 50,
            chance: 22,
            bonusYahtzee: 200,
            lowerTotal: 414,
            grandTotal: 523
         },
      ])
    })
}

const connection = require('./connection')

function getScores( db = connection ) {
    return db( 'scores' )
      .select()
      // .orderBy('id', 'desc')
      // .limit(10)
}


function getScore(id, db = connection) {
   return db( 'scores' )
     .select('id', id).first()

}



module.exports = {
 getScores
}
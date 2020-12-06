
const request = require('superagent')

function list(){
  return request
    .get('/api/scores/cli')
    .then(res => {
      res.body.forEach(score => {
        console.info(`${score.id}: ${score.name}, Total: ${score.grandTotal}`)
      })
    })
    .catch(console.error('Uh oh!', err.message))
}

function del(id){
  return request
    .delete('/api/scores/cli/' + id)
    .then(res => {
        console.info(res.body)
    })
    .catch(console.error('Uh oh!', err.message))
}

module.exports = {
  list,
  del
}
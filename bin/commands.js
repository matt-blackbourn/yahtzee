
const request = require('superagent')

// const URL = 'http://localhost:3000'
const URL = 'https://yahtzee-play.herokuapp.com'

function list(){
  return request
    .get(URL + '/api/scores/cli')
    .then(res => {
      res.body.forEach(score => {
        console.info(`${score.id}: ${score.name}, Total: ${score.grandTotal}`)
      })
    })
    .catch(err => console.error('Uh oh!', err.message))
}

function del(id){
  return request
    .delete(URL + '/api/scores/cli/' + id)
    .then(res => {
        console.info(res.body)
    })
    .catch(err => console.error('Uh oh!', err.message))
}

function editName(id, name){
  return request
    .patch(URL + '/api/scores/cli/' + id)
    .send({name: name})
    .then(res => {
        console.info(res.body)
    })
    .catch(err => console.error('Uh oh!', err.message))
}

module.exports = {
  list,
  del,
  editName
}
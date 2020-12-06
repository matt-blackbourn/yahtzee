
const request = require('superagent')

// const URL = 'http://localhost:3000'
const URL = 'https://yahtzee-play.herokuapp.com'

function list(){
  return request
    .get(URL + '/cli')
    .then(res => {
      res.body.forEach(score => {
        console.info(`${score.id}: ${score.name}, Total: ${score.grandTotal}`)
      })
    })
    .catch(err => console.error('Uh oh!', err.message))
}

function del(id){
  return request
    .delete(URL + '/cli/' + id)
    .then(res => {
        console.info(res.body)
    })
    .catch(err => console.error('Uh oh!', err.message))
}

function editName(id, name){
  return request
    .patch(URL + '/cli/' + id)
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
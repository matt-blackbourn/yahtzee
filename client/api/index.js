import request from 'superagent'

export const fetchHighScoresAPI = () => {
  return request
    .get('/api/scores')
    .then(res => res.body)
}

export const postScoreAPI = newScore => {
  return request
    .post('/api/scores')
    .send(newScore)
    .then(res => res.body)
}

export const registerUserAPI = user => {
  return request
    .post('/api/auth/register')
    .send(user)
    .then(res => res.body)
}
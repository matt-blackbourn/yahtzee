import request from 'superagent'

export const fetchHighScoresAPI = () => {
  return request
    .get('/api/scores')
    .then(res => res.body)
}

function getToken(){
  return window.localStorage.getItem('token')
}

export const postScoreAPI = newScore => {
  return request
    .post('/api/scores')
    .set({ Accept: 'application/json' })
    .set({ Authorization: `Bearer ${getToken()}` })
    .send(newScore)
    .then(res => res.body)
}

export const registerUserAPI = user => {
  return request
    .post('/api/auth/register')
    .send(user)
    .then(res => res.body)
}

export const loginAPI = user => {
  return request
    .post('/api/auth/login')
    .send(user)
    .then(res => res.body)
}
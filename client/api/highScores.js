import request from 'superagent'

export const fetchHighScoresAPI = () => {
  return request
    .get('/api/scores')
    .then(res => res.body)
}

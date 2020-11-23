import request from 'superagent'
import { getHighScores } from './actions'

export const fetchHighScores = () => {
   return dispatch => {
      return request
         .get('/api/scores')
         .then(response => dispatch(getHighScores(response.body)))
         .catch(err => console.log(err))
   }
}
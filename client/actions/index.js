export const CHANGE_PAGE = 'CHANGE_PAGE'
export const GET_HIGHSCORES = 'GET_HIGHSCORES'
import request from 'superagent'

export const changePage = change => {
   return {
      type: CHANGE_PAGE,
      gamePageShowing: change
   }
}

export const getHighScores = (scores) => {
   return {
      type: GET_HIGHSCORES,
      scores
   }
}

export const fetchScores = () => {
   return dispatch => {
      return request
         .get('/api/scores')
         .then(response => dispatch(getHighScores(response.body)))
         .catch(err => console.log(err))
   }
}

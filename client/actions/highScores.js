import { fetchHighScoresAPI } from "../api/highScores"
export const SET_HIGHSCORES = 'SET_HIGHSCORES'


export const setHighScores = scores => {
  return {
     type: SET_HIGHSCORES,
     scores
  }
}

export const fetchHighScores = () => {
  return dispatch => {
    fetchHighScoresAPI()
      .then(scores => dispatch(setHighScores(scores)))
  }
}
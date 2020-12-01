import { fetchHighScoresAPI } from "../api/highScores"
export const SET_HIGHSCORES = 'SET_HIGHSCORES'
export const HIGHSCORE_UPDATED = 'HIGHSCORE_UPDATED'


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

export const changeActiveScore = score => {
  return {
    type: HIGHSCORE_UPDATED,
    score
  }
}
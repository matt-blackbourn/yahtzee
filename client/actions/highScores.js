import { fetchHighScoresAPI, postScoreAPI } from "../api"
import { changePage, restartGame } from "."
export const SET_HIGHSCORES = 'SET_HIGHSCORES'
export const HIGHSCORE_UPDATED = 'HIGHSCORE_UPDATED'
export const ADDED_SCORE_TO_HIGHSCORES = 'ADDED_SCORE_TO_HIGHSCORES'
export const SHOW_FORM = 'SHOW_FORM'


export const fetchHighScores = () => {
  return dispatch => {
    fetchHighScoresAPI()
      .then(scores => dispatch(setHighScores(scores)))
  }
}

export const postScore = newScore => {
  return dispatch => {
    postScoreAPI(newScore)
      .then(scores => {
        dispatch(setHighScores(scores))
        dispatch(restartGame())
        dispatch(changeActiveScore(newScore))
        dispatch(changePage(false))
      }) 
  }
}

export const setHighScores = scores => {
  return {
     type: SET_HIGHSCORES,
     scores
  }
}

export const changeActiveScore = score => {
  return {
    type: HIGHSCORE_UPDATED,
    score
  }
}

export const addToHighScores = newScore => {
  return {
    type: ADDED_SCORE_TO_HIGHSCORES,
    newScore
  }
}

export const showForm = () => {
  return {
    type: SHOW_FORM
  }
}

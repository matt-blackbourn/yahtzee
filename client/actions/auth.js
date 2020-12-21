import { registerUserAPI } from "../api"
export const ACTIVE_USER_SET = 'ACTIVE_USER_SET'

export const registerUser = user => {
  return dispatch => {
    registerUserAPI(user)
      .then(res => {
        if(res.ok){
          dispatch(setActiveUser(user.username))
          window.localStorage.setItem('token', res.token)
          //this needs to submit score, and save score form needs to be login
          //once logged in, token will be in local storage, and active user will be in state and can be used for entering scores
          //on initial page load, need to verify token
          //if token valid, need to set active user

        } else {
          
        }
      })
  }
}

export const setActiveUser = name => {
  return {
    type: ACTIVE_USER_SET,
    name
  }
}

// window.localStorage.getItem(key)

// {
//   "ok": true,
//   "message": "Authentication successful",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjA4NDM0MjY3LCJleHAiOjE2MDg1MjA2Njd9.VSgb8FV8lJ2pyUY9kPdtSZ1NDcxrMPDfPpLPGUdrjfg"
// }
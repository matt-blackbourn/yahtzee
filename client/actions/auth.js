import { registerUserAPI, loginAPI } from "../api"
export const ACTIVE_USER_SET = 'ACTIVE_USER_SET'

export const registerUser = user => {
  return dispatch => {
    registerUserAPI(user)
      .then(res => {
        if(res.ok){
          dispatch(setActiveUser(res.username))
          window.localStorage.setItem('token', res.token)
        } else {
          alert(res.message)
        }
      })
  }
}

export const login = user => {
  return dispatch => {
    loginAPI(user)
      .then(res => {
        if(res.ok){
          dispatch(setActiveUser(res.username))
          window.localStorage.setItem('token', res.token)
        } else {
          alert(res.message)
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
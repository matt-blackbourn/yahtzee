import { registerUserAPI, loginAPI, verifyUserAPI } from "../api"
export const ACTIVE_USER_SET = 'ACTIVE_USER_SET'
export const ACTIVE_USER_REMOVED = 'ACTIVE_USER_REMOVED'

export const registerUser = user => {
  return dispatch => {
    return registerUserAPI(user)
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
    return loginAPI(user)
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

export const verifyUser = token => {
  return dispatch => {
    return verifyUserAPI(token)
      .then(res => {
        if(res.ok){
          dispatch(setActiveUser(res.username))
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

export const logOut = () => {
  return {
    type: ACTIVE_USER_REMOVED,
  }
}

import { registerUserAPI } from "../api"

export const registerUser = user => {
  return dispatch => {
    registerUserAPI(user)
      .then(res => {
        if(res.ok){
          //set active user
          window.localStorage.setItem(token, res.token)
          alert('token set')
        } else {
          
        }
      })
  }
}

// {
//   "ok": true,
//   "message": "Authentication successful",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjA4NDM0MjY3LCJleHAiOjE2MDg1MjA2Njd9.VSgb8FV8lJ2pyUY9kPdtSZ1NDcxrMPDfPpLPGUdrjfg"
// }
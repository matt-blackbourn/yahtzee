import { registerUserAPI } from "../api"


export const registerUser = user => {
  return dispatch => {
    registerUserAPI(user)
      .then(res => {
        if(!res.ok){
          alert(res.message)
        } else {
          alert(res.message)
        }
      })
  }
}
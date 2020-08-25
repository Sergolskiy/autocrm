import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";


export function auth(email, password, isLogin) {
  return async dispatch => {

    const authData = {
      email, password,
      returnSecureToken: true
    }

    dispatch(authSuccess('token'))
    localStorage.setItem('token', 'token')
  }
}

export function logout() {
  localStorage.removeItem('token')
  return{
    type: AUTH_LOGOUT
  }
}

export function autoLogin() {
  return dispatch => {
    const token = localStorage.getItem('token')
    if(!token) {
      dispatch(logout())
      return false
    } else {
      dispatch(authSuccess('token'))
      return true
      // const expirationDate = newDate(localStorage.getItem('expirationDate'))
      // if(expirationDate <= new Date()) {
      //   dispatch(logout())
      // } else {
      //   dispatch(authSuccess(token))
      //   dispatch(autoLogout(token))
      // }
    }
  }
}

export function authSuccess(token) {
  return{
    type: AUTH_SUCCESS,
    token
  }
}

import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";

export function auth(email, password, isLogin) {
  return async dispatch => {

    const authData = {
      email, password,
      returnSecureToken: true
    }

    dispatch(authSuccess('token'))
  }
}

export function logout() {
  return{
    type: AUTH_LOGOUT
  }
}

export function authSuccess(token) {
  return{
    type: AUTH_SUCCESS,
    token
  }
}

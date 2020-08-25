import {AUTH_LOGOUT, AUTH_SUCCESS} from "../action/actionTypes";

const initialState = {
  token: null,
  isAuthenticated: true,
}

export default  function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return{
        ...state, token: action.token, isAuthenticated: true
      }

    case AUTH_LOGOUT:
      return {
        ...state, token: null, isAuthenticated: false
      }

    default: return state
  }
}

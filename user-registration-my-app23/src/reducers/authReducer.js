import { LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
  token: localStorage.getItem('token') || null,
  username: localStorage.getItem('currentUser') || null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { token: action.payload.token, username: action.payload.username };
    case LOGOUT:
      return { token: null, username: null };
    default:
      return state;
  }
}

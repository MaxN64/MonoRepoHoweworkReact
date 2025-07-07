export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const login = (username) => dispatch => {
  
  const token = btoa(username + ':' + new Date().getTime());
  localStorage.setItem('token', token);
  localStorage.setItem('currentUser', username);
  dispatch({ type: LOGIN_SUCCESS, payload: { token, username } });
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('currentUser');
  dispatch({ type: LOGOUT });
};
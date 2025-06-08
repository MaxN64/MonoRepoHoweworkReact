// src/redux/actions.js

// Тип действия
export const SET_USER_INFO = 'SET_USER_INFO';

// Action Creator для обновления информации о пользователе.
// Принимает объект с полями name и status.
export function setUserInfo({ name, status }) {
  return {
    type: SET_USER_INFO,
    payload: { name, status }
  };
}

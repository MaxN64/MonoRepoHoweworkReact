// src/redux/reducers.js

import { SET_USER_INFO } from './actions';

// Начальное состояние “пользователя”
const initialState = {
  name: 'John Doe',      // можно задать любое дефолтное значение
  status: 'online'       // по заданию в примере статус “online”
};

// Редьюсер, который слушает экшен типа SET_USER_INFO
export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        name: action.payload.name,
        status: action.payload.status
      };

    default:
      return state;
  }
}

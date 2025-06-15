// src/redux/store.js

import { createStore } from 'redux';
import { userReducer } from './reducers';

// Здесь можно подключить расширения (devtools) при необходимости.
// Но для простоты создаём чистый стор:

const store = createStore(
  userReducer,
  // Для интеграции с Redux DevTools (если нужно), можно раскомментировать:
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

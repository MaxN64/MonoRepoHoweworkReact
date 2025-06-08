// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import User from './User';
import UserForm from './UserForm';

function App() {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: '400px', margin: '2rem auto', fontFamily: 'Arial, sans-serif' }}>
        {/* Компонент, который просто показывает текущее имя и статус из Redux */}
        <User />

        {/* Форма для редактирования данных */}
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;

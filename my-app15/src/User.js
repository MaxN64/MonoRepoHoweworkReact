// src/User.js

import React from 'react';
import { connect } from 'react-redux';

// Функциональный компонент, отображает имя и статус пользователя
function User({ name, status }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
      <h2>User Profile</h2>
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Status:</strong> {status}
      </div>
    </div>
  );
}

// mapStateToProps — берёт из Redux-state те поля, которые нужны данному компоненту
const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status
});

// Подключаем компонент к Redux-хранилищу
export default connect(mapStateToProps)(User);

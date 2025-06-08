// src/UserForm.js

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions';

function UserForm({ setUserInfo }) {
  // Локальные состояния для полей формы
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();

    // Валидация (минимум — не пустые строки)
    if (name.trim() === '' || status.trim() === '') {
      alert('Пожалуйста, заполните оба поля перед сохранением.');
      return;
    }

    // Диспатчим экшен, передаём объект { name, status }
    setUserInfo({ name, status });

    // Можно сбросить форму, если нужно
    // setName('');
    // setStatus('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
      <h3>Edit User Information</h3>
      <div style={{ marginBottom: '0.5rem' }}>
        <label>
          Name:&nbsp;
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите имя"
            style={{ padding: '0.25rem', borderRadius: '2px', border: '1px solid #999' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <label>
          Status:&nbsp;
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Введите статус"
            style={{ padding: '0.25rem', borderRadius: '2px', border: '1px solid #999' }}
          />
        </label>
      </div>
      <button type="submit" style={{ padding: '0.5rem 1rem', borderRadius: '2px', cursor: 'pointer' }}>
        Save
      </button>
    </form>
  );
}

// mapDispatchToProps: пробрасываем в пропс функцию-диспатчер
const mapDispatchToProps = {
  setUserInfo
};

// Подключаем компонент и отдаём ему проп `setUserInfo`
export default connect(null, mapDispatchToProps)(UserForm);

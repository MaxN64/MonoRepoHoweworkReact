import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username]) {
      setError('Пользователь с таким именем уже существует');
    } else if (!username.trim() || !password.trim()) {
      setError('Введите корректные данные');
    } else {
      users[username] = password;
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/login');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Регистрация</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleRegister} className={styles.form}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;

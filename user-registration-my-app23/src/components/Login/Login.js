import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../../actions/authActions';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (users[username] && users[username] === password) {
      dispatch(login(username));
      navigate('/profile');
    } else {
      setError('Неверное имя пользователя или пароль');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Авторизация</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <button type="submit" className={styles.button}>Войти</button>
      </form>
      <p className={styles.text}>
        Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link>
      </p>
    </div>
  );
};

export default Login;
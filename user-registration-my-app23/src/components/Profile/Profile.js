import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import styles from './Profile.module.css';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(state => state.auth.username);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Профиль</h2>
      <p className={styles.text}>Привет, {username}!</p>
      <button onClick={handleLogout} className={styles.button}>Выйти</button>
    </div>
  );
};

export default Profile;

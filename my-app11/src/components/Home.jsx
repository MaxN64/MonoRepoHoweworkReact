import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Добро пожаловать в мой блог!</h1>
      <p>Здесь вы найдёте интересные статьи про React и фронтенд.</p>
    </div>
  );
}

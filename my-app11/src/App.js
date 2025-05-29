import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ArticlesList from './components/ArticlesList';
import ArticlePage from './components/ArticlePage';
import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>
          Главная
        </NavLink>
        <NavLink to="/articles" className={({ isActive }) => isActive ? styles.active : ''}>
          Статьи
        </NavLink>
       
      </nav>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

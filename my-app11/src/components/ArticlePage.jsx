import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { articles } from '../data/articles';
import styles from '../styles/ArticlePage.module.css';

export default function ArticlePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const article = articles.find((a) => a.id === id);

  if (!article) {
    return <p>Статья не найдена.</p>;
  }

  return (
    <div className={styles.article}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      <p className={styles.path}>Текущий путь: {location.pathname}</p>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

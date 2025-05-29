import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import styles from '../styles/ArticlesList.module.css';

export default function ArticlesList() {
  return (
    <div className={styles.list}>
      <h2>Список статей</h2>
      <ul>
        {articles.map((a) => (
          <li key={a.id}>
            <Link to={`/articles/${a.id}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

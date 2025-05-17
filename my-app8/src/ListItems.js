import React, { useState, useEffect } from 'react';
import styles from './ListItems.module.css';

export default function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() === '') return;
    setItems(prev => [...prev, inputValue]);
    setInputValue('');
  };

  useEffect(() => {
    console.log('Компонент смонтирован');
  },[] );

  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Введите элемент"
          className={styles.inputField}
        />
        <button onClick={addItem} className={styles.addButton}>
          Добавить
        </button>
      </div>
      <ul className={styles.list}>
        {items.map((item, idx) => (
          <li key={idx} className={styles.listItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

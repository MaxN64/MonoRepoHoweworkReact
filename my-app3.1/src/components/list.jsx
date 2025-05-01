import React, { useState } from 'react';

const initialPeople = [
  { id: 1, name: 'Иван', age: 20 },
  { id: 2, name: 'Мария', age: 22 },
  { id: 3, name: 'Алексей', age: 21 },
  { id: 4, name: 'Марина', age: 19 },
  { id: 5, name: 'Даша', age: 23 },
  { id: 6, name: 'Глеб', age: 24 },
  { id: 7, name: 'Дима', age: 18 },
  { id: 8, name: 'Гриша', age: 20 },
  { id: 9, name: 'Серафим', age: 21 }
];

export default function List() {
  const [people, setPeople] = useState(initialPeople);

  const handleRemove = (id) => {
    setPeople((prev) => prev.filter(person => person.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Список приглашённых</h2>
      <ul style={styles.list}>
        {people.map(person => (
          <li key={person.id} style={styles.item}>
            <span>{person.name}, {person.age} лет</span>
            <button style={styles.button} onClick={() => handleRemove(person.id)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
      {people.length === 0 && <p style={styles.empty}>Нет приглашённых</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  },
  title: {
    textAlign: 'center',
    marginBottom: '15px'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  button: {
    padding: '5px 10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    cursor: 'pointer'
  },
  empty: {
    textAlign: 'center',
    fontStyle: 'italic'
  }
};

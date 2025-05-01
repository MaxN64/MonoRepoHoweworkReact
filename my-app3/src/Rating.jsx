
import React, { useState } from 'react';

const ratingList = [
  'https://upload.wikimedia.org/wikipedia/commons/d/dd/Star_rating_1_of_5.png', 
  'https://upload.wikimedia.org/wikipedia/commons/9/95/Star_rating_2_of_5.png', 
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Star_rating_3_of_5.png', 
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Star_rating_4_of_5.png/150px-Star_rating_4_of_5.png',                         
  'https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png'                          
                        
];

export function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  const buttons = [
    { label: 'Плохо',      value: 0 },
    { label: 'Приемлемо',  value: 1 },
    { label: 'Хорошо',     value: 2 },
    { label: 'Отлично',    value: 4 },
  ];

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      padding: '60px',
      background: 'blue',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      height: '100px',
      margin: '0 auto',
      
    },
    image: {
      width: '250px',
      height: 'auto',
    },
    buttonsContainer: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    button: {
      padding: '8px 12px',
      fontSize: '14px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 0.2s',
    },
    activeButton: {
      background: '#4caf50',
      color: '#fff',
    },
    inactiveButton: {
      background: '#e0e0e0',
      color: '#333',
    }
  };

  return (
    <div style={styles.container}>
      <img
        src={ratingList[ratingValue]}
        alt={`Рейтинг: ${ratingValue + 1} звезда${ratingValue === 0 ? '' : 'ы'}`}
        style={styles.image}
      />

      <div style={styles.buttonsContainer}>
        {buttons.map(btn => (
          <button
            key={btn.value}
            onClick={() => setRatingValue(btn.value)}
            style={{
              ...styles.button,
              ...(ratingValue === btn.value
                ? styles.activeButton
                : styles.inactiveButton)
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

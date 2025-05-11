import React from 'react';
import styles from '../styles/IconButton.module.css';

export default function IconButton({ normalIcon, hoverIcon, alt, onClick }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      aria-label={alt}
      style={{
      
        '--normal-icon': `url(${normalIcon})`,
        '--hover-icon':  `url(${hoverIcon})`,
      }}
    />
  );
}
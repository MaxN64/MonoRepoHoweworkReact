import React from 'react'
import Circle from '../assets/svg/Circle.svg'
import styles from '../styles/CategoryCard.module.css'

export default function CategoryCard({ text, url }) {
  return (
    <div className={styles.card}>
      {/* Если url — это React-компонент (SVG как компонент) */}
      {typeof url === 'function'
        ? <url />               // рендерим его как компонент
        : <img src={url} alt={text} /> // иначе — как картинку
      }
      <p>{text}</p>
    </div>
  )
}

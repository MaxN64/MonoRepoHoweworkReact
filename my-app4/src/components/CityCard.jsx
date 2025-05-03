import React from "react";
import styles from "./CityCard.module.css";

export default function CityCard({ city }) {
  if (!city) return null;
  return (
    <div className={styles.card}>
      <img
        src={city.imageUrl}
        alt={city.name}
        className={styles.image}
      />
      <div>
        <h2 className={styles.name}>{city.name}</h2>
        <p>{city.description}</p>
        <ul className={styles.facts}>
          {city.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

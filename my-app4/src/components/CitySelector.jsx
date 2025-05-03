import React from "react";
import styles from "./CitySelector.module.css";

export default function CitySelector({ cities, selectedCity, onSelect }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="city" className={styles.label}>
        Выберите город:
      </label>
      <select
        id="city"
        value={selectedCity.name}
        onChange={e => {
          const city = cities.find(c => c.name === e.target.value);
          onSelect(city);
        }}
        className={styles.select}
      >
        {cities.map(city => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
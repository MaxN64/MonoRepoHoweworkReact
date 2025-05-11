import React from "react";
import styles from "../styles/SearchForm.module.css";
import Search from "../assets/svg/Search.svg";
import Location from "../assets/svg/Location.svg";

const SearchForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.inputGroup}>
        <img src={Search} alt="Search Icon" />
        <input
          placeholder="Должность или компания"
          type="text"
          className={styles.input}
        />
        <div className={styles.divider}></div>
          <img src={Location} alt="location" />
          <input
            placeholder="Город, Страна"
            type="text"
            className={styles.input}
          />
        </div>
      
      <button className={styles.button} type="submit">
        Поиск
      </button>
    </form>
  );
};

export default SearchForm;

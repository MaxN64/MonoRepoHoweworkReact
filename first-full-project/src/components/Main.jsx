// src/components/Main.jsx
import React from "react";
import styles from "../styles/Main.module.css";
import SearchForm from "./SearchForm";
import JobLinks from "./JobLinks";
import JobsCategory from "./JobsCategory";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainWrapper}>
        <h1 style={{ fontSize: "64px" }}>
          Один клик<br></br> и работа в кармане
        </h1>
        <SearchForm />
      </div>

      <JobLinks />
      <JobsCategory />

    </div>
  );
};

export default Main;



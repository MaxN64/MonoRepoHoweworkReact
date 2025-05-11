// src/components/Header.jsx
import React from "react";
import styles from "../styles/Header.module.css";
import logo from "../assets/svg/Logo.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navigation}>
        <div className={styles.search}>
          <div className={styles.logo}>
            <img className="" src={logo} alt="logo" />
          </div>
          <div style={{display:'flex', gap:'50px'}}>
            <a href=" ">Поиск работы</a>
            <a href=" ">Поиск start up</a>
          </div>
        </div>
        <div className={styles.auth}>
          
            <button className={styles.regButton}><a style={{fontWeight:400}} href="*">Регистрация</a></button>
          
         
            <button className={styles.authButton}> <a style={{fontWeight:400}} href="*">Вход</a></button>
        
        </div>
      </nav>
    </div>
  );
};

export default Header;

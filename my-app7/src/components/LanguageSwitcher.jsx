import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  return (
    <button className={styles.switcher} onClick={toggleLanguage}>
      Switch Language
    </button>
  );
};

export default LanguageSwitcher;
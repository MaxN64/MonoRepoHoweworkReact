import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from './TextDisplay.module.css';

const messages = {
  en: 'English language was chosen',
  ru: 'Выбран русский язык',
};

const TextDisplay = () => {
  const { lang } = useContext(LanguageContext);
  return <h1 className={styles.heading}>{messages[lang]}</h1>;
};

export default TextDisplay;
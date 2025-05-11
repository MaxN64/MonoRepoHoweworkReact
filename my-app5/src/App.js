import React from 'react';
import styles from './styles/App.module.css';
import Logo from './components/Logo';
import Hero from './components/Hero';
import ButtonGroup from './components/ButtonGroup';

const App = () => (
  <div className={styles.app}>
    <Logo />
    <Hero />
    <ButtonGroup />
  </div>
);

export default App;

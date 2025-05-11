import React from 'react';
import { ReactComponent as SpotifyIcon } from '../assets/spotify.svg';
import styles from '../styles/Logo.module.css';

const Logo = () => (
  <div className={styles.logo}>
    <SpotifyIcon />
  </div>
);

export default Logo;

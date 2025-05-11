
import React from 'react';
import IconButton from './IconButton';

import apple      from '../assets/Apple.png';
import appleHover from '../assets/Apple1.png';

import google      from '../assets/Google.svg';
import googleHover from '../assets/Google1.png';

import x      from '../assets/X.svg';
import xHover from '../assets/X1.png';

import styles from '../styles/ButtonGroup.module.css';

const ButtonGroup = () => (
  <div className={styles.group}>
    <IconButton
      normalIcon={apple}
      hoverIcon={appleHover}
      alt="Sign in with Apple"
      onClick={() => {}}
    />
    <IconButton
      normalIcon={google}
      hoverIcon={googleHover}
      alt="Sign in with Google"
      onClick={() => {}}
    />
    <IconButton
      normalIcon={x}
      hoverIcon={xHover}
      alt="Sign in with X"
      onClick={() => {}}
    />
  </div>
);

export default ButtonGroup;

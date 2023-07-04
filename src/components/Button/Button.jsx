import React from 'react';
import styles from './Button.module.css';

const Button = ({action, info}) => {
  return (
    <button
      onClick={event => {
        action(event, info);
      }}
      type='button'
      className={info.following === false ? styles.button : `${styles.button}  ${styles.active}`}
    >
      {info.following === false ? 'follow' : 'following'}
    </button>
  );
};

export default Button;

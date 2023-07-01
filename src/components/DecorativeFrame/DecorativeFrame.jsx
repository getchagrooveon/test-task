import React from 'react';
import styles from './DecorativeFrame.module.css';

const DecorativeFrame = ({avatar}) => {
  return (
    <>
      <span className={styles.line}></span>
      <img className={styles.img} src={avatar} width='62' height='62' alt=''></img>
    </>
  );
};

export default DecorativeFrame;

import React from 'react';
import styles from './DecorativeFrame.module.css';

const DecorativeFrame = () => {
  return (
    <>
      <span className={styles.line}></span>
      <img
        className={styles.img}
        src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/824.jpg'
        width='62'
        height='62'
        alt=''
      ></img>
    </>
  );
};

export default DecorativeFrame;

import React from 'react';
import styles from './Information.module.css';

const Information = ({tweets, followers}) => {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.text}>{tweets} tweets</li>
        <li className={styles.text}>{followers} followers</li>
      </ul>
    </>
  );
};

export default Information;

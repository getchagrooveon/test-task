import React from 'react';
import styles from './Information.module.css';

const Information = () => {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.text}>tweets</li>
        <li className={styles.text}>followers</li>
      </ul>
    </>
  );
};

export default Information;

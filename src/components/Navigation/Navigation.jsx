import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={styles.linkContainer}>
      <NavLink className='NavLink' to={'/home'}>
        Home
      </NavLink>
      <NavLink className='NavLink' to={'/tweets'}>
        Tweets
      </NavLink>
    </div>
  );
};

export default Navigation;

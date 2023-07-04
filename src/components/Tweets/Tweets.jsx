import React from 'react';
import image from '../../images/travolta.gif';
import styles from './Tweets.module.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Tweets = () => {
  return (
    <>
      <Navigation />
      <div className={styles.tweetsContainer}>
        <img
          className={styles.image}
          src={image}
          alt='there is nothing to show, pal. come on, close the page'
        />
        <Link className={styles.link} to='/home'>
          Back to home page
        </Link>
      </div>
    </>
  );
};

export default Tweets;

import React from 'react';
import {ThreeCircles} from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.backdrop}>
      <ThreeCircles
        height='100'
        width='100'
        color='#4fa94d'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='three-circles-rotating'
        outerCircleColor='#4f2e9c'
        innerCircleColor='#5cd3a8'
        middleCircleColor='#ebd8ff'
      />
    </div>
  );
};

export default Loader;

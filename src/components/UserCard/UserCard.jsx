import React from 'react';
import styles from './UserCard.module.css';
import Logo from '../Logo/Logo.jsx';
import DecorativeFrame from '../DecorativeFrame/DecorativeFrame';
import Information from '../Information/Information';
import Button from '../Button/Button';

const UserCard = () => {
  return (
    <div className={styles.usercard}>
      <Logo />
      <DecorativeFrame />
      <Information />
      <Button />
    </div>
  );
};

export default UserCard;

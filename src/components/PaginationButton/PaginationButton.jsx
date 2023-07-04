import React from 'react';
import styles from './PaginationButton.module.css';

const PaginationButton = ({action}) => {
  return (
    <button onClick={() => action()} type='button' className={styles.loadMoreButton}>
      Load more
    </button>
  );
};

export default PaginationButton;

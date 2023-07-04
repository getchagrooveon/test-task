import React, {useEffect, useState} from 'react';
import styles from './Filters.module.css';

const Filters = ({action}) => {
  const [selectedValue, setSelectedValue] = useState('All');

  useEffect(() => {}, []); //

  const handleChange = event => {
    console.log(event.target.value);
    console.log(selectedValue);
    setSelectedValue(event.target.value);
    action(event.target.value);
  };

  return (
    <label className={styles.filterContainer} htmlFor='select'>
      <select
        className={styles.filter}
        id='select'
        onChange={handleChange}
        value={selectedValue}
        // defaultValue='All'
      >
        <option value='All'>All</option>
        <option value='Following'>Following</option>
        <option value='To follow'>To follow</option>
      </select>
    </label>
  );
};

export default Filters;

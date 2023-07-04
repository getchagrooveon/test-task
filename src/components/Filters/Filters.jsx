import React from 'react';
import styles from './Filters.module.css';
import {NavLink} from 'react-router-dom';

const Filters = ({action}) => {
  return (
    <div className={styles.filterContainer}>
      <NavLink
        onClick={event => action(event)}
        className={({isActive, isPending}) => (isPending ? 'Filter' : isActive ? '' : '')}
        style={({isActive, isPending}) => {
          return {
            backgroundColor: isPending ? '#ebd8ff' : '#5cd3a8',
          };
        }}
        to='/home'
      >
        All
      </NavLink>
      <NavLink
        onClick={event => action(event)}
        className={({isActive, isPending}) =>
          isPending ? 'Filter' : isActive ? 'FilterActive' : ''
        }
        style={({isActive, isPending}) => {
          return {
            backgroundColor: isPending ? '#ebd8ff' : '#5cd3a8',
          };
        }}
        to='/home'
      >
        Following
      </NavLink>
      <NavLink
        onClick={event => action(event)}
        className={({isActive, isPending}) =>
          isPending ? 'Filter' : isActive ? 'FilterActive' : ''
        }
        style={({isActive, isPending}) => {
          return {
            backgroundColor: isPending ? '#ebd8ff' : '#5cd3a8',
          };
        }}
        to='/home'
      >
        To follow
      </NavLink>
    </div>
  );
};

export default Filters;

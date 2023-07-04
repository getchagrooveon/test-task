import styles from './Filters.module.css';

const Filters = ({action}) => {
  return (
    <label className={styles.filterContainer} htmlFor='select'>
      <select className={styles.filter} id='select' onClick={event => action(event.target.text)}>
        <option value='All'>All</option>
        <option value='Following'>Following</option>
        <option value='To follow'>To follow</option>
      </select>
    </label>
  );
};

export default Filters;

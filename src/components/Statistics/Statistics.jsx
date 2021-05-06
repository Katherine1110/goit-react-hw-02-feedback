import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>Good: {good}</li>
      <li className={styles.list_item}>Neutral: {neutral}</li>
      <li className={styles.list_item}>Bad: {bad}</li>
      <li className={styles.list_item}>Total: {total}</li>
      <li className={styles.list_item}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  total: PropTypes.number.isRequired,
  positivePercentag: PropTypes.number,
};

export default Statistics;

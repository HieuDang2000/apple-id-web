// components/RunningText.js
import React from 'react';
import styles from './running-text.module.css'; // Import the CSS module

const RunningText = ({ text }) => {
  return (
    <div className={styles["running-text"]}>
      <span className={styles["running-text span"]}>{text}</span>
    </div>
  );
};

export default RunningText;

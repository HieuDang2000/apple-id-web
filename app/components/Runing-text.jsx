// components/RunningText.js
import React from 'react';
import styles from './running-text.module.css'; // Import the CSS module

const RunningText = ({ text }) => {
  return (
    <div className="rounded-lg bg-slate-200 dark:bg-slate-950 text-slate-800 dark:text-white">
      <div className={styles["running-text"]}>
        <span className={styles["running-text span"]}>{text}</span>
      </div>
    </div>
  );
};

export default RunningText;

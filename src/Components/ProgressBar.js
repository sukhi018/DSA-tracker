import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ total_ques,ques_done }) => {
  const progressPercentage = (ques_done / total_ques) * 100;

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressFill}
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;

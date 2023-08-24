import React from 'react';
import styles from './QuesHeader.module.css';

import { useDispatch } from 'react-redux';
import { quesAction } from './Store/index';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

function QuesHeader({ topic }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showTopics = () => {
    navigate('/');
    dispatch(quesAction.showTopics());
  };

  return (
    <React.Fragment>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>
          <span
            onClick={showTopics}
            className={styles.highlightTopics}
          >
            Topics
          </span>
          <span className={styles.topicText}>/{topic}</span>
        </h1>
        <SearchBar topic={topic} />
        <div className={styles.header}>
          <div>Done</div>
          <div>Id</div>
          <div className={styles.prob}>Problem</div>
          <div>Link</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default QuesHeader;

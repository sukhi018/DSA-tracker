import React from 'react'
import TopicCard from './TopicCard';
import styles from './TopicChart.module.css';

import { useSelector } from 'react-redux';
function Dash() {
    const allTopics = useSelector(state => state.markQues.allTopics)
  return (

      <div className={styles.topic_chart}>
        {allTopics.map((topic)=>
      ( <TopicCard  key={Math.random()} topic={topic}/>))}
      </div>
    
  );
}

export default Dash
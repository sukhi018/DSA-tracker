import React from 'react'
import ProgressBar from './ProgressBar';
import styles from './TopicCard.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function TopicCard({topic}) {
    
  const total_ques = useSelector(state => state.markQues.data)[topic].length
  const ques_done = useSelector(state => state.markQues.answeredCount[topic])

  const navigate = useNavigate()

  const navigateHandler = (name)=>{
    navigate(`/topic/${name}`)
  }



  return (
    <div className={styles.topic_card} onClick = {()=>navigateHandler(topic)}  >
        <div><h1>{topic}</h1></div>
        <div>No of total questions :{total_ques}</div>
        <div>Accepted questions :{ques_done}</div>
        <div><ProgressBar total_ques={total_ques} ques_done={ques_done}/></div>    
    </div>
  )
}

export default TopicCard
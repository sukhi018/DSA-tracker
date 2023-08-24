import React from 'react'
import styles from './Question.module.css'
function Question({index, url, problem,markQues,done}) {


  return (
    <div className = {`${styles.question} ${done && styles.accepted}`} >
        <div><input type="checkbox"  {...(done ? { checked: true }:{})} onChange={()=>markQues(index)} name="" className = {styles.input} /></div>
        <div>{index+1}</div>
        <div className={styles.prob}>{problem}</div>
        <div><a href={url}>Link</a></div>
    </div>
  )
}

export default Question
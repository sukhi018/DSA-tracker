import React from "react";
import { useDispatch } from "react-redux";
import { quesAction } from "./Store/index";
import { useSelector } from "react-redux";
import { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ topic }) {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.markQues.data);
  const total_ques = data[topic].length;
  const ques_done = useSelector((state) => state.markQues.answeredCount)[topic];

  const search = (query) => {
    const filteredResults = [];
    for (let i = 0; i < data[topic].length; i++) {
      let item = data[topic][i];
      if (
        item[0].toLowerCase().includes(query.toLowerCase()) ||
        `${i + 1}`.includes(query)
      ) {
        filteredResults.push([...item, i]);
      }
    }
    dispatch(quesAction.showFilteredData(filteredResults));
  };

  const rand = (x) => {
    const randomDecimal = Math.random();
    const randomInRange = randomDecimal * x;
    const randomInteger = Math.floor(randomInRange);
    return randomInteger;
  };

  const [randLink, setRandLink] = useState("");

  const changeRand = () => {
    if (data[topic]) {
      const randomIndex = rand(data[topic].length);
      const randomLink = data[topic][randomIndex];
      if (randomLink) {
        setRandLink(randomLink[1]);
      }
    }
  };

  return (
    <React.Fragment>
<div className={styles.searchBarContainer}>
  <div className={styles.linkContainer}>
    <a
      href={randLink}
      target="_blank"
      rel="noreferrer"
      onClick={changeRand}
      className={styles.randomLink}
    >
      Random
    </a>
  </div>
  <div className={styles.searchContainer}>
    <form className={styles.searchForm}>
      <input
        onChange={(event) => search(event.target.value)}
        placeholder="Search"
        type="text"
        className={styles.searchInput}
      />
    </form>
  </div>
  <div className={styles.doneCount}>
    {ques_done}/{total_ques} DONE &#9989;
  </div>
</div>


    </React.Fragment>
  );
}

export default SearchBar;

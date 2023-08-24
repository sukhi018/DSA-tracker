import React from "react";
import styles from "./QuesChart.module.css";
import Question from "./Question";
import QuesHeader from "./QuesHeader";
import {useParams } from 'react-router-dom';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { quesAction } from "./Store/index";

import { ToastContainer } from "react-toastify";
import PushNotif from "./PushNotif";
function QuesChart() {
	const {name} = useParams()
	const checkFilter = useSelector((state) => state.markQues.checkFilter);
	let filteredData = useSelector((state) => state.markQues.filteredData);
	let data = useSelector((state) => state.markQues.data);
	let acc = useSelector((state) => state.markQues.answeredCount);
	let topic = name;
	let currData
	if (checkFilter) {
		currData = filteredData;
	} else {
		currData = data[topic];
	}


	const dispatch = useDispatch();
	const markQ = (index) => {
		dispatch(quesAction.markQues({ topic, index }));
	};
	return (
		<>
		<div className={styles.chart}>
			<PushNotif acc={acc[topic]} topic={topic} total={data[topic].length}/>
			<div className={styles.all}>
				<QuesHeader topic={topic} />
				{currData.map(
					(ques, index) =>
						!ques[2] && (
							<Question
								markQues={markQ}
								topic={topic}
								problem={ques[0]}
								url={ques[1]}
								index={ques.length > 3 ? ques[3] : index}
								key={index}
								done={ques[2]}
							/>
						)
				)}
				{currData.map(
					(ques, index) =>
						ques[2] && (
							<Question
								markQues={markQ}
								topic={topic}
								problem={ques[0]}
								url={ques[1]}
								done={ques[2]}
								index={ques.length > 3 ? ques[3] : index}
								key={index}
							/>
						)
				)}
			</div>

		</div>
		<ToastContainer/>
		</>

	);
}

export default QuesChart;

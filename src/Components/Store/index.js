import { createSlice, configureStore } from "@reduxjs/toolkit";
import Ques from '../../Ques.json'

const questions = Ques['Sheet1']
let data = {}
let answeredCount = {}
const storedData = localStorage.getItem('questionsData');
if (storedData) {
  data = JSON.parse(storedData);
  Object.keys(data).forEach(topic => {
    answeredCount[topic] = data[topic].filter(item => item[2]).length;
  });
}else
{
  questions.forEach((item)=>{
    let topic = item['Topic:']
    let problem = item['Problem: ']
    let link = item['URL']
    if (topic in data)
    {
      data[topic].push([problem,link,false])

    }else{
      data[topic] = [[problem,link,false]]
    }
    answeredCount[topic] = 0

  })

}

let allTopics = Object.keys(data).sort()
let checkFilter=false
let filteredData=[]

let initialState;
let lastMarked = null;
if (storedData) {
  initialState = {
    data: JSON.parse(storedData),
    allTopics,
    answeredCount,
    checkFilter,
    filteredData,
    lastMarked
  };
} else {
  initialState = {
    data,
    allTopics,
    answeredCount,
    checkFilter,
    filteredData,
    lastMarked
  };
}



const questionSlice = createSlice({
    name:'question data',
    initialState,
    reducers:{
         markQues(state,action){

          if (state.data[action.payload.topic][action.payload.index][2])
          {
            state.answeredCount[action.payload.topic]-=1
          }else
          {
            state.answeredCount[action.payload.topic]+=1
          };

          state.data[action.payload.topic][action.payload.index][2] = !state.data[action.payload.topic][action.payload.index][2];
          if (state.checkFilter)
          {
            for (let i = 0;i<state.filteredData.length;i++)
            {
              let item = state.filteredData[i]
              if (item[3]===action.payload.index)
              {
                state.filteredData[i][2]=!state.filteredData[i][2]
                break
              }
            }
          }
          state.lastMarked = action.payload.index
            },
          showTopics(state){
            state.checkFilter = false;
            state.filteredData = [false];

          },
          showFilteredData(state,action)
          {
            state.checkFilter = true;
            state.filteredData = action.payload

          },
          revert(state)
          {
            state.lastMarked = null
          }
    }
})
const reduxstore = configureStore({
    reducer:{
        markQues : questionSlice.reducer
    }
})
export const quesAction = questionSlice.actions
export default reduxstore;
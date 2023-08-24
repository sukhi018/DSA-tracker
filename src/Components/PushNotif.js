import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AccNotif from './AccNotif'
import RejNotif from './RejNotif'
import { useDispatch } from "react-redux"
import { quesAction } from "./Store/index"
const markAns = (acc, total) => {
  toast.success(<AccNotif acc={acc} total={total} />, {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  })
}

const markUnans = (acc, total) => {
  toast.error(<RejNotif acc={acc} total={total} />, {
    position: 'top-right',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  })
}

function PushNotif({ acc, total, topic }) {
  const data = useSelector((state) => state.markQues.data)
  const index = useSelector((state) => state.markQues.lastMarked);
  const dispatch  = useDispatch()
  const undo = () => {
    dispatch(quesAction.revert());
};
  // eslint-disable-next-line

  useEffect(() => {
    if (index !== null) {
      if (data[topic][index][2]) {
        markAns(acc, total)
      } else {
        markUnans(acc, total)
      }
      localStorage.setItem('questionsData', JSON.stringify(data))
      undo()
    }
  }, [data, index, acc, total, topic])

  return <></>
}

export default PushNotif

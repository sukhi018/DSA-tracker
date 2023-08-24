import React from 'react'

function RejNotif({acc,total}) {
  return (
    <div>
      <h4>{acc} / {total} Done</h4>
      <p>Marked as not answered</p>
    </div>  )
}

export default RejNotif
import React from 'react'

function AccNotif({acc,total}) {
  return (
    <div>
    <h4>{acc} / {total} Done</h4>
    <p>Marked as answered</p>
  </div>  )
}

export default AccNotif
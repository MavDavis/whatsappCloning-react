import React from 'react'

const Modal = ({left, height, content, right}) => {
  console.log(left);
  return (
    <div
    style={{
      zIndex: "100000",
      left: left,
      right:right,
      top: "3.5rem",
      boxShadow: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px",
      backgroundColor: "#2a3942",
    }}
    className="fixed  rounded-lg h-32 w-48 p-4 flex flex-col    "
  >
  {content}
  </div>  )
}

export default Modal
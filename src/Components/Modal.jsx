import React from 'react'

const Modal = ({left, height, content, right}) => {
  return (
    <div
    data-aos="fade-right"
    style={{
      zIndex: "100000",
      left: left,
      right:right,
      top: "3.5rem",
      boxShadow: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }}
    className="fixed  rounded-lg h-32 w-48 p-4 flex flex-col dark:text-slate-200 text-slate-800   dark:bg-dark-bg bg-white "
  >
  {content}
  </div>  )
}

export default Modal
import React from 'react'

const Modal = ({width, height, content}) => {
  return (
    <div className={`${width}, ${height} dark:bg-darker-bg`}>{content}</div>
  )
}

export default Modal
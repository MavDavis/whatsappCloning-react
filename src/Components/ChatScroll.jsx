import React, { useEffect, useRef } from 'react'
const ChatScroll = ({ currentOpenedChat }) => {
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  
  useEffect(() => {
    scrollToBottom()
  }, [currentOpenedChat]);
  const { message } = currentOpenedChat;
  let item = message.map((item, ind) => {
    return (
      <li
        key={ind}
        style= {{maxWidth:'60%'}}
        className={`${
          item.userId === 1
            ? "bg-teal-green-dark  flex  ml-auto "
            : "bg-dark-bg  flex   "
        } dark:text-slate-200 my-1 w-fit p-2 text-sm rounded-lg`}
      >
        {item.message}
      </li>
    );
  });
  return (
    <ul className=" px-8 flex flex-col relative w-full min-h-full h-fit top-14 mb-28 ">
      {item}
      <div ref={messagesEndRef} />

    </ul>
  );
};

export default ChatScroll;

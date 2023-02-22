import React, { useEffect, useRef } from "react";
import { useStateContext } from "../Contexts/ContextProvider";
const ChatScroll = ({}) => {
  const { currentOpenedChat, user } = useStateContext();
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentOpenedChat]);
  let item = currentOpenedChat.message.map((item, ind) => {
    return (
      <li
        key={ind}
        style={{ maxWidth: "60%" }}
        className={`${
          item.id === user.id
            ? "dark:bg-teal-green-dark bg-light-text-green dark:text-slate-200 text-slate-800  flex  ml-auto "
            : "dark:bg-dark-bg bg-white dark:text-slate-300 text-slate-800  flex   "
        }  my-1 w-fit p-2 text-sm rounded-lg shadow-sm`}
      >
        {item.message}
      </li>
    );
  });
  return (
    <>
      <ul className="chatScroll px-8 flex flex-col relative w-full min-h-full h-fit top-14 mb-28 ">
        {currentOpenedChat.message.length > 0 && item}
      </ul>
      <div ref={messagesEndRef} />
    </>
  );
};

export default ChatScroll;

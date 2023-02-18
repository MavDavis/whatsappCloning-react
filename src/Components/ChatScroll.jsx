import React, { useEffect, useRef } from "react";
import { useStateContext } from "../Contexts/ContextProvider";
const ChatScroll = ({  }) => {
  const {currentOpenedChat, user}= useStateContext()
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentOpenedChat]);
  const  message  = currentOpenedChat;
  let item = message.message.map((item, ind) => {
    return (
      <li
        key={ind}
        style={{ maxWidth: "60%" }}
        className={`${
          item.id === user.id
            ? "bg-teal-green-dark  flex  ml-auto "
            : "bg-dark-bg  flex   "
        } dark:text-slate-200 my-1 w-fit p-2 text-sm rounded-lg`}
      >
        {item.message}
      </li>
    );
  });
  return (
    <>
    <ul className="chatScroll px-8 flex flex-col relative w-full min-h-full h-fit top-14 mb-28 ">
      {item}
    </ul>
    <div ref={messagesEndRef} />

    </>
  );
};

export default ChatScroll;

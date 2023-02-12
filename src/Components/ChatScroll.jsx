import React from "react";
const ChatScroll = ({ currentOpenedChat }) => {
  const { message } = currentOpenedChat;
  let item = message.map((item, ind) => {
    return (
      <li
        key={ind}
        className={`${
          item.userId === 1
            ? "bg-teal-green-dark  flex  ml-auto "
            : "bg-dark-bg  flex   "
        } dark:text-slate-200 my-2 w-fit p-3 rounded-lg`}
      >
        {item.message}
      </li>
    );
  });
  return (
    <ul className=" px-4 flex flex-col relative w-full min-h-full h-fit top-11 mb-28 ">
      {item}
    </ul>
  );
};

export default ChatScroll;

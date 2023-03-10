import React from "react";
import { AccountCircleIcon } from "../IconsExport";
import { TiTick } from "react-icons/ti";
import { useStateContext } from "../Contexts/ContextProvider";
const ActiveChats = () => {
  const {
    openedChat,
    openChat,
    user,
    setOpenedChat,
    setChatMessage,
    setShowChatList,
    setShowChat,
    chatList,
  } = useStateContext();
  const open = (id) => {
    openChat(id);
    setOpenedChat(true);
    setChatMessage("");
    if (window.innerWidth < 640) {
      setShowChat(true);
      setShowChatList(false);
    } else {
      setShowChat(true);
      setShowChatList(true);
    }
  };
  return (
    <>
      {chatList && (
        <ul className="mt-28 relative w-full">
          {chatList.map((chat, ind) => (
            <li
              key={ind}
              className="  pl-3 cursor-pointer dark:hover:bg-dark-bg hover:bg-light-header-bg"
              onClick={() => {
                open(chat.id);
              }}
            >
              <div className="flex items-center h-fit ">
                <div className="rounded-full w-12 relative h-11 border flex items-center  justify-center ">
                  {chat.profileImage.length ? (
                    <img
                      src={chat.profileImage}
                      className="w-full h-full rounded-full relative"
                      alt="avatar"
                    />
                  ) : (
                    <AccountCircleIcon
                      className=" account  min-w-full min-h-full text-slate-300
              rounded-full relative"
                    />
                  )}
                </div>
                <div className="border-b dark:border-b-slate-600 border-b-slate-200 py-2 flex w-full h-full relative ml-3 text-slate-800 dark:text-slate-200">
                  <div className="flex flex-col">
                    <p className="text-lg font-normal">{chat.Fullname}</p>
                    {chat.message.length > 0 && (
                      <div className="flex items-center">
                        {chat.message[chat.message.length - 1].id ===
                          user.id && <TiTick  className="text-teal-600 text-xl"/>}
                        <p className="text-sm text-slate-800 dark:text-slate-300 font-thin">
                          {chat.message[chat.message.length - 1].message}
                        </p>
                      </div>
                    )}
                    <p></p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ActiveChats;

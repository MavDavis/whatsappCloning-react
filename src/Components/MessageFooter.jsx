import React from "react";
import { IoMdSend } from "react-icons/io";
import { useStateContext } from "../Contexts/ContextProvider";
import { RiCloseLine } from "react-icons/ri";

import {
  KeyboardVoiceIcon,
  TagFacesIcon,
  AttachFileIcon,
} from "../IconsExport";

const MessageFooter = () => {
  const {
    chatMessage,
    setChatMessage,
    sendMessage,
    currentOpenedChat,
    showEmoji,
    setShowEmoji,
  } = useStateContext();
  return (
    <div
      style={{
        padding: ".75rem 2.75rem",
      }}
      className="responsive   dark:bg-darkest-bg min-h-fit  fixed bg-light-header-bg flex  bottom-0 z-1000   dark:text-white items-center "
    >
      <div className="icons flex items-center dark:text-slate-400 text-slate-800">
        {showEmoji && (
          <RiCloseLine
            className="text-2xl mr-4 cursor-pointer font-medium dark:text-slate-400 text-slate-800"
            onClick={() => setShowEmoji(false)}
          />
        )}
        <TagFacesIcon
          className="cursor-pointer dark:text-slate-400 text-slate-800"
          onClick={() =>
            currentOpenedChat.id !== 0 && currentOpenedChat.id !== 1
              ? setShowEmoji(!showEmoji)
              : setShowEmoji(false)
          }
        />
        <AttachFileIcon className="mx-4 cursor-not-allowed dark:text-slate-400 text-slate-800" />
      </div>
      <div className="input w-9/10 mr-3">
        <input
          type="text"
          name=""
          id=""
          value={chatMessage}
          disabled={
            currentOpenedChat.id === 0 || currentOpenedChat.id === 1
              ? true
              : false
          }
          onChange={(e) => setChatMessage(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              if (chatMessage) {
                sendMessage();
              }
            }
          }}
          placeholder="start a new chat"
          className="dark:bg-dark-bg bg-white text-slate-800 outline-0 dark:text-slate-200 p-4 text-sm rounded-lg w-full h-8 relative"
        />
      </div>
      <div className="icons flex items-center text-lg  dark:text-slate-400">
        {!chatMessage ? (
          <KeyboardVoiceIcon className="cursor-not-allowed dark:text-slate-400 text-slate-800" />
        ) : (
          <IoMdSend onClick={sendMessage} className="cursor-pointer dark:text-slate-400 text-slate-800" />
        )}
      </div>
    </div>
  );
};

export default MessageFooter;

import React from 'react'
import {IoMdSend} from 'react-icons/io'
import { useStateContext } from "../Contexts/ContextProvider";

import {
  KeyboardVoiceIcon,
  TagFacesIcon,
  AttachFileIcon,
 
} from "../IconsExport";

const MessageFooter = () => {
    const {  message, setMessage } = useStateContext();
  return (
    <div
    style={{
      width: "calc(100vw - 415px",
      left: "415px",
      padding: ".75rem 2.75rem",
    }}
    className="   dark:bg-darkest-bg min-h-fit   fixed  flex  bottom-0 z-1000   dark:text-white items-center "
  >
    <div className="icons flex items-center dark:text-slate-400">
      <TagFacesIcon className="cursor-pointer"/>
      <AttachFileIcon className="mx-4 cursor-pointer" />
    </div>
    <div className="input w-9/10 mr-3">
      <input
        type="text"
        name=""
        id=""
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="start a new chat"
        className="dark:bg-dark-bg outline-0 dark:text-slate-200 p-4 text-sm rounded-lg w-full h-8 relative"
      />
    </div>
    <div className="icons flex items-center text-lg cursor-pointer dark:text-slate-400">
      {!message ? <KeyboardVoiceIcon /> : <IoMdSend />}
    </div>
  </div>  )
}

export default MessageFooter
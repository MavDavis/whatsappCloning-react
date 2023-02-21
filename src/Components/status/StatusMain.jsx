import React from "react";
import { useStateContext } from "../../Contexts/ContextProvider";
import { RiCloseLine } from "react-icons/ri";
import { MdDonutLarge } from "react-icons/md";

const StatusMain = () => {
  const { setShowStatus } = useStateContext();
  return (
    <div className=" responsive fixed overflow-y-auto top-0 min-h-fit h-full ">
      <div className="absolute top-5 right-5">
        <RiCloseLine
          className="cursor-pointer text-3xl font-bold dark:text-slate-200"
          onClick={() => {
            setShowStatus(false);
          }}
        />
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="mt-14 items-center justify-center flex">
          <MdDonutLarge className="statusDonut dark:text-slate-500" />
        </div>
        <div className="my-auto justify-center items-center text-center flex dark:text-slate-500">
          <p>Click on a contact to view their status update.</p>
        </div>
      </div>
    </div>
  );
};

export default StatusMain;

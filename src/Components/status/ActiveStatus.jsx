import React from "react";

import { useStateContext } from "../../Contexts/ContextProvider";
const ActiveStatus = () => {
  const { status, clickedStatus, setClickedStatus,setShowStatusImage } = useStateContext();
  const open = (id) => {
    const statusToShow = status.find(item=> item.user.id === id);
    setClickedStatus(statusToShow)
    setShowStatusImage(true)
  };
  return (
    <>
      {/* {status.length > 0 && ( */}
      <ul className="mt-5 pr-4 relative w-full">
        {status.map((stat, ind) => (
          <li
            key={ind}
            className="  pl-3 cursor-pointer dark:hover:bg-dark-bg"
            onClick={() => {
              open(stat.user.id);
            }}
          >
            <div className="flex items-center h-fit ">
              <div className="rounded-full w-12 relative h-11  flex items-center  justify-center ">
                <img
                  src={stat.images[stat.images.length - 1]}
                  className="w-full absolute top-0 left-0 h-full rounded-full "
                  alt="avatar"
                />

                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  className="relative"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeDasharray="100 2"
                    strokeDashoffset="-2"
                  />
                </svg>
              </div>
              <div className=" py-2 flex w-full h-full relative ml-3 text-slate-200">
                <div className="flex flex-col">
                  <p className="text-lg font-normal">{stat.user.Fullname}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* )} */}
    </>
  );
};

export default ActiveStatus;

import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useStateContext } from "../../Contexts/ContextProvider";
import { RiCloseLine } from "react-icons/ri";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const SwiperJs = () => {
  const { clickedStatus, setShowStatus, setShowStatusImage, setClickedStatus } =
    useStateContext();
    const closeStatus =()=>{
      setShowStatusImage(false);
            setClickedStatus({});
    }
    const closeStatusWithTimeout = ()=>{
      setTimeout(() => {
        closeStatus()
      }, 5000);
    }
  return (
    <Swiper
      style={{
        "--swiper-pagination-color": "#ccc",
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size": "24px",

        "--swiper-pagination-bullet-inactive-color": "#fff",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-width": `calc(70% / ${clickedStatus.images.length}) `,
        "--swiper-pagination-bullet-height": "4px",
        "--swiper-pagination-bullet-size": "5px !important",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      className="h-screen bg-slate-400 w-screen relative flex justify-center"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) =>{
        swiper.realIndex + 1 === swiper.slides.length ? closeStatusWithTimeout() :console.log(swiper);
      }}
    >
      <p className="flex top-8 left-0 px-6 absolute items-center justify-between w-full text-slate-200 text-3xl font-extrabold z-1000 ">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          onClick={closeStatus}
        />
        <RiCloseLine
          className="cursor-pointer"
          onClick={() => {
            setShowStatus(false);

            setShowStatusImage(false);
            setClickedStatus({});
          }}
        />
      </p>
      {clickedStatus.images.map((item) => (
        <SwiperSlide
          key={item}
          className="w-full h-full  flex justify-center items-center bg-no-repeat bg-cover relative"
          style={{ backgroundImage: `url(${item})` }}
        >
          <div
            className="absolute w-full h-full"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          ></div>
          <div
            style={{ maxWidth: "75%" }}
            className="w-3/4 flex justify-center relative z-1000"
          >
            <img src={item} className="object-cover relative" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperJs;

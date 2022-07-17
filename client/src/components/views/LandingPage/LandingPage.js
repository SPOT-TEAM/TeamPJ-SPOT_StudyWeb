import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import _auth from "./../../../hoc/auth";
import NavBar from "../_NavBar/NavBar";
import Footer from "../_Footer/Footer";
// swiper
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);
  _auth(null);

  return (
    <div className="LandingPage">
      <div className="LandingPageWrapper">
        <h2>공개채용정보 | 신입</h2>
        {/* <img
          className="sampleBanner"
          src={process.env.PUBLIC_URL + `/assets/sample1.jpg`}
        /> */}
        <Swiper
          className="croporateRecruitment"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="slider">
            <div className="sliderWrapper">
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/assets/croporateRecruitment/croporate1.png`
                }
              />
              <button>more . . .</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="sliderWrapper">
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/assets/croporateRecruitment/croporate2.png`
                }
              />
              <button>more . . .</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider">
            <div className="sliderWrapper">
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/assets/croporateRecruitment/croporate3.png`
                }
              />
              <button>more . . .</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default LandingPage;

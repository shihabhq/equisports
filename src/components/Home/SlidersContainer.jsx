import { SwiperSlide, Swiper } from "swiper/react";
import JerseaySlider from "./sliders/JerseaySlider";
import MotivatingSlider from "./sliders/MotivatingSlider";
import SneakerSlider from "./sliders/SneakerSlider";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./sliders/slider.css";

const SlidersContainer = () => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper">
      <SwiperSlide>
        <MotivatingSlider />
      </SwiperSlide>
      <SwiperSlide>
        <SneakerSlider />
      </SwiperSlide>
      <SwiperSlide>
        <JerseaySlider />
      </SwiperSlide>
    </Swiper>
  );
};

export default SlidersContainer;

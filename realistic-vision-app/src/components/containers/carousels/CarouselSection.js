import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function CarouselSection({ components = [], defaultActiveIndex = 0 }) {
  const handleSlideChange = (swiper) => {
    //console.log(swiper);
  };

  const handleonActiveIndexChange = (swipper) => {
    // TODO: Make left and right arrows not visible when slide reach start or end
    // console.log(swipper.navigation);
    // console.log(swipper.activeIndex);
  };

  return (
    <Swiper
      style={{ width: "100vw", height: "100vh" }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      onActiveIndexChange={handleonActiveIndexChange}
      navigation
      scrollbar={{ draggable: true }}
      onSlideChange={handleSlideChange}
    >
      {components.map((component, index) => (
        <SwiperSlide style={{ width: "100vw", height: "100vh" }} key={index}>
          {component}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CarouselSection;

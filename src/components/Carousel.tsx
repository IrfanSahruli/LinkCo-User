import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const images = ['kopigayo.jpg', 'kopigayo.jpg', 'kopigayo.jpg'];

const CarouselSwiper = () => {
    return (
        <div className="relative w-full md:w-[1250px] mx-auto mt-10 rounded-2xl overflow-hidden">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-full h-200px md:h-[300px] object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Posisi dots di dalam gambar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <div className="swiper-pagination !static flex justify-center gap-2"></div>
            </div>
        </div>
    );
};

export default CarouselSwiper;

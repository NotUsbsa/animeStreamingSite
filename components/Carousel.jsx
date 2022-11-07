import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

import Styles from "../styles/Carousel.module.scss";

export default function Carousel() {
  const [images, setImages] = useState([]);

  const controller = new AbortController();
  const signal = controller.signal;

  const fetchImagesUrl = "https://kitsu.io/api/edge/trending/anime";

  const fetchImages = async () => {
    const temp = await fetch(fetchImagesUrl, { signal })
      .then((response) => response.json())
      .then((response) => {
        setImages(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "disabled_swiper_button",
        }}
        className="mySwiper carousel"
      >
        {images.map((data, index) => (
          <SwiperSlide className={Styles.background}>
            <Image
              key={index}
              src={data.attributes.coverImage.large}
              alt={data.attributes.abbreviatedTitles[0]}
              objectFit="cover"
              layout="fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

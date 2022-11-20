import React, { useEffect, useState } from "react";
import Styles from "../styles/index.module.scss";
import RecentlyAdded from "../components/RecentlyAdded/RecentlyAdded";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

import carStyles from "../styles/Carousel.module.scss";

export async function getStaticProps() {
  const fetchImagesUrl = "https://kitsu.io/api/edge/trending/anime";

  const res = await fetch(fetchImagesUrl);
  const data = await res.json();

  return {
    props: { images: data.data },
  };
}

export default function Home({ images }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {toggle ? (
        <div>
          <button onClick={() => setToggle(false)}>false</button>
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
                  initialslide="5"
                  src={data.attributes.coverImage.large}
                  alt={data.attributes.abbreviatedTitles[0]}
                  objectFit="cover"
                  layout="fill"
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div>
          <button onClick={() => setToggle(true)}>turn back on carousel</button>
        </div>
      )}
      <div>
        <RecentlyAdded />
      </div>
    </div>
  );
}

import { useGetNewMusicQuery } from "../redux/services/service";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

const NewRelease = () => {
  const { data, isFetching, error } = useGetNewMusicQuery();

  const displayNewRelease = data?.map((song, index) => {
    return (
      <SwiperSlide style={{ width: "auto", height: "auto" }}>
        <div key={song.id}>
          <img
            src={song.cover}
            alt=""
            className="w-[190px] h-[190px] rounded-3xl"
          />
          <h3 className="text-md text-white mt-2 ">{song.title}</h3>
          <p className=" text-base text-white text-opacity-50 font-light">
            {song.artist}
          </p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="w-full mt-14">
      <h2 className="text-2xl font-bold mb-2 text-white">New Releases</h2>

      <Swiper
        slidesPerView="auto"
        spaceBetween={40}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="flex mt-4"
      >
        {displayNewRelease}
      </Swiper>
    </div>
  );
};

export default NewRelease;

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import {
  useGetNewMusicQuery,
  useGetPopularMusicQuery,
} from "../redux/services/service";
import PlayPause from "./PlayPause";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

const NewRelease = ({ useQueryHook, isPlaying, activeSong }) => {
  const { data, isFetching, error } = useQueryHook();
  // const isFetching = true;

  const dispatch = useDispatch();

  const displayNewRelease = data?.map((song, i) => {
    const handlePauseClick = () => {
      dispatch(playPause(false));
    };

    const handlePlayClick = () => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    };

    if (error) return <h1>Error Loading Song</h1>;

    return (
      <SwiperSlide style={{ width: "auto", height: "auto" }} key={song.id}>
        <div>
          <div className="relative w-full h-fit group cursor-pointer">
            <div
              className={`absolute inset-0 justify-center items-center h-[190px] bg-black bg-opacity-50 group-hover:flex rounded-3xl ${
                activeSong?.title === song.title
                  ? "flex bg-black bg-opacity-70"
                  : "hidden"
              }`}
            >
              <PlayPause
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePause={handlePauseClick}
                handlePlay={handlePlayClick}
              />
            </div>

            <img
              src={song.cover}
              alt="song_img"
              className={`w-[190px] h-[190px] rounded-3xl `}
            />
            <h3 className="text-md text-white mt-2 ">{song.title}</h3>
            <p className=" text-base text-white text-opacity-50 font-light">
              {song.artist}
            </p>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="w-full mt-10 ">
      <h2 className="text-2xl font-bold mb-2 text-white">
        {useQueryHook === useGetNewMusicQuery
          ? "New Releases"
          : "Popular In Your Area"}
      </h2>

      <Swiper
        slidesPerView="auto"
        spaceBetween={35}
        freeMode
        // centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="flex mt-4 overflow-x-hidden"
      >
        {displayNewRelease}
      </Swiper>
    </div>
  );
};

export default NewRelease;

{
  /* {isFetching ? (
          <div className="flex gap-8  ">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-[190px] h-[190px] rounded-3xl animate-pulse bg-gray-300 dark:bg-gray-700"
              />
            ))}
          </div>
        ) : (
          displayNewRelease
          )} */
}

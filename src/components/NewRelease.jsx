import "swiper/css";
import "swiper/css/free-mode";
import Loader from "./Loader";
import { FreeMode } from "swiper";
import PlayPause from "./PlayPause";
import SubHeading from "./SubHeading";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetNewMusicQuery } from "../redux/services/service";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const NewRelease = ({ useQueryHook, isPlaying, activeSong }) => {
  const { data, isFetching, error } = useQueryHook();
  const dispatch = useDispatch();

  const displayNewRelease = data?.map((song, i) => {
    const handlePauseClick = () => {
      dispatch(playPause(false));
    };

    const handlePlayClick = () => {
      dispatch(setActiveSong({ song, data, i }));
      dispatch(playPause(true));
    };

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
      <SubHeading
        text={
          useQueryHook === useGetNewMusicQuery
            ? "New Releases"
            : "Popular In Your Area"
        }
      />

      <Swiper
        slidesPerView="auto"
        spaceBetween={35}
        freeMode
        centeredSlidesBounds
        modules={[FreeMode]}
        className="flex mt-4 overflow-x-hidden"
      >
        {displayNewRelease}
      </Swiper>

      {isFetching && <Loader className="h-100%" />}
      {error && <h1>Error Loading Song</h1>}
    </div>
  );
};

export default NewRelease;

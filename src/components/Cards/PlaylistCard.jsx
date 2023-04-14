import React from "react";
import { Link } from "react-router-dom";
import PlayPauseBtn from "../Buttons/PlayPauseBtn";
import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoPlay, IoPause } from "react-icons/io5";

const PlaylistCard = ({ playlist, index, favourites, collections }) => {
  const dispatch = useDispatch();

  const { activeSong, isPlaying } = useSelector(
    (state) => state.persisted.player
  );

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data: playlist, i: 0 }));

    isPlaying ? dispatch(playPause(false)) : dispatch(playPause(true));
  };

  return (
    <Link to={`/playlist/${playlist.id}`} key={`playlist-${index}`}>
      <div className="overflow-hidden cursor-pointer rounded-3xl relative group aspect-auto flex animate-slowfade md:mt-0 mb-[20px]">
        <div className="rounded-lg z-10 cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-20 text-white flex items-end">
          <div className="flex">
            <div className="p-4 text-xl">
              <h2 className="font-medium leading-6 md:text-xl text-base">
                {playlist.title}
              </h2>
              <p className="font-extralight text-sm mb-3">
                {playlist.files?.length} Songs
              </p>
            </div>
          </div>
        </div>
        <img
          alt={playlist.title}
          className="flex object-cover object-center group-hover:scale-110 transition duration-300 ease-in-out sm:w-[270px] aspect-square w-full"
          src={playlist.cover}
        />
        <div
          className="absolute z-[11] right-4 bottom-4"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div
            onClick={() => handlePlayClick(playlist.files[0], 0)}
            className="p-2 transition-all rounded-full bg-[#FACD66] active:scale-90 box-shadow md:mx-0 mx-3 cursor-pointer"
          >
            {/* {isPlaying ? (
              <IoPause color="#ffffff" />
            ) : (
              <IoPlay color="#ffffff" />
              )} */}
            <IoPlay color="#ffffff" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaylistCard;

{
  /* <PlayPauseBtn
            className=""
            isPlaying={isPlaying}
            handlePlay={handlePlayClick}
          /> */
}

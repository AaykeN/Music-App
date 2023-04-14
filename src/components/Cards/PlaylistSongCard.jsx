import React from "react";
import { HiDotsVertical, HiOutlineHeart } from "react-icons/hi";

const PlaylistSongCard = ({ isActiveSong, handlePlayClick, song }) => {
  return (
    <div
      onClick={handlePlayClick}
      className={`bg-[#33373B]/[37%] hover:bg-[#2e323440] cursor-pointer rounded-2xl flex py-2 px-3 md:p-3 items-center gap-4 md:gap-10 lg:gap-28`}
      key={`song-${song.id}`}
    >
      <div className="flex items-center">
        <img
          src={song.cover}
          alt="art cover"
          className="w-14 h-auto rounded-lg object-cover"
        />
        <div className="md:ml-3 lg:ml-5 hidden md:block">
          <HiOutlineHeart className="w-6 h-auto text-white" />
        </div>
      </div>
      <div className="flex w-full md:items-center text-sm lg:text-base font-light">
        <div
          className={`flex-1 flex flex-col min-w-0 w-40  md:flex-row md:items-center gap-1 md:gap-0 `}
        >
          <p
            className={`truncate flex-1 text-start ${
              isActiveSong ? "text-[#FACD66]" : ""
            }`}
          >
            {song.title} - {song.artist}
          </p>
          <p className=" flex-1 text-start md:text-center text-xs md:text-base">
            Single
          </p>
        </div>
        <div className="md:flex-1 lg:flex-1 flex flex-col-reverse md:flex-row shrink gap-1 md:gap-0 items-end md:items-center ">
          <div className="flex-1 flex justify-center">
            <p className="text-end md:text-center text-xs md:text-base">
              {song.duration}
            </p>
          </div>
          <div className="flex-1 flex flex-shrink-5 justify-end items-center">
            <HiDotsVertical className="lg:mr-6 text-[#FACD66]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistSongCard;

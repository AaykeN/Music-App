import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    {activeSong && (
      <>
        <div className={`h-fit w-14 sm:w-16 mr-3 `}>
          <img
            src={activeSong ? activeSong?.cover : ""}
            alt={activeSong?.cover ? "Cover Art" : ""}
            className="rounded-2xl smooth-transition w-14 sm:h-16 sm:w-16"
          />
        </div>
        <div className="w-[50%]">
          <p className="truncate text-white font-bold text-base md:text-lg ">
            {activeSong?.title}
          </p>
          <p className="truncate text-gray-300 text-sm ">
            {activeSong?.artist}
          </p>
        </div>
      </>
    )}
  </div>
);

export default Track;

import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className={` hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.cover} alt="cover art" className="rounded-2xl" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </p>
      <p className="truncate text-gray-300 text-sm">
        {activeSong?.artist ? activeSong?.artist : "No active Song"}
      </p>
    </div>
  </div>
);

export default Track;

import React from "react";
import { Link } from "react-router-dom";
import { useGetPlaylistQuery } from "../redux/services/service";

const TopChart = () => {
  const { data, isFetching, error } = useGetPlaylistQuery();

  const playListCard = data?.slice(0, 3).map((playlist, index) => {
    console.log(playlist);
    return (
      <div className="w-full flex flex-row items-center  bg-[#1A1E1F] rounded-3xl p-6 cursor-pointer mb-2">
        <div className="flex-1 flex flex-row justify-between items-center">
          <img className="w-20 h-20 rounded-lg" src={playlist.cover} />
          <div className="flex-1 flex flex-col justify-center mx-3">
            <p className="text-xl font-normal text-white">{playlist.title}</p>
            <p className="text-base text-gray-300 mt-1 text-opacity-50">
              {playlist.info.replace(/^(.{40}[^\s]*).*/, "$1")}...
            </p>
            <p className="text-base text-gray-300 mt-1">12:24</p>
          </div>
          <button class="p-2 border-[1px] rounded-full border-gray-500 transition-all active:scale-125">
            <svg
              class="text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 0 0-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold mb-2 text-white">Top Playlist</h2>
      {playListCard}
    </div>
  );
};

export default TopChart;

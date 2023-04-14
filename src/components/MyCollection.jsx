import React from "react";
import { useSelector } from "react-redux";
import PlaylistCard from "./Cards/PlaylistCard";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const MyCollection = () => {
  const { collections } = useSelector((state) => state.persisted.collections);

  return (
    <>
      {!collections.length && (
        <>
          <div className="min-h-[250px] flex justify-center items-center">
            <h2 className="text-lg text-white">No Collections Yet</h2>
          </div>
        </>
      )}
      <div className="flex-1 sm:flex sm:flex-nowrap flex-wrap md:gap-[30px] gap-[20px]">
        {collections?.map((playlist, index) => {
          return (
            <PlaylistCard
              collections={collections}
              playlist={playlist}
              index={index}
              key={`playlistCard-${index}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default MyCollection;

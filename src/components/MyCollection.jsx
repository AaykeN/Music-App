import React, { useState } from "react";
import { useSelector } from "react-redux";
import PlaylistCard from "./Cards/PlaylistCard";

const MyCollection = () => {
  const { collections, isFetching } = useSelector(
    (state) => state.persisted.collections
  );

  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  console.log(currentPlaylist);
  const handlePlaylistClick = (playlist) => {
    if (playlist !== currentPlaylist) {
      setCurrentPlaylist(playlist);
    }
  };

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
              isTargetPlaylist={playlist === currentPlaylist}
              onPlaylistClick={handlePlaylistClick}
              collections={collections}
              playlist={playlist}
              index={index}
              key={`playlistCard-${index}`}
            />
          );
        })}
        {isFetching && <Loader className="h-100%" />}
      </div>
    </>
  );
};

export default MyCollection;

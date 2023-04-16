import { useSelector } from "react-redux";
import PlaylistCard from "../components/Cards/PlaylistCard";
import Loader from "../components/Loader";
import { useState } from "react";

const Likes = () => {
  const { favourites, isFetching } = useSelector(
    (state) => state.persisted.favourites
  );

  const [currentPlaylist, setCurrentPlaylist] = useState(null);

  const handlePlaylistClick = (playlist) => {
    if (playlist !== currentPlaylist) {
      setCurrentPlaylist(playlist);
    }
  };

  return (
    <>
      {!favourites.length && (
        <>
          <div className="min-h-[250px] flex justify-center items-center">
            <h2 className="text-lg text-white">No Likes Yet</h2>
          </div>
        </>
      )}

      <div className="flex-1 sm:flex sm:flex-nowrap flex-wrap md:gap-[30px] gap-[20px]">
        {favourites?.map((playlist, index) => (
          <PlaylistCard
            isPlaying={playlist === currentPlaylist}
            onPlaylistClick={handlePlaylistClick}
            favourites={favourites}
            playlist={playlist}
            index={index}
            key={`likesCard-${index}`}
          />
        ))}
        {isFetching && <Loader className="h-100%" />}
      </div>
    </>
  );
};

export default Likes;

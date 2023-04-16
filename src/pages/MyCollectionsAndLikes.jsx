import Loader from "../components/Loader";
import { useState } from "react";
import PlaylistCard from "../components/Cards/PlaylistCard";
import { useSelector } from "react-redux";

const MyCollectionsAndLikes = ({ activeButton }) => {
  const propertyName = activeButton;
  const { [propertyName]: data, isFetching } = useSelector(
    (state) => state.persisted[propertyName]
  );

  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const handlePlaylistClick = (playlist) => {
    if (playlist !== currentPlaylist) {
      setCurrentPlaylist(playlist);
    }
  };

  return (
    <div key={activeButton}>
      {!data.length && (
        <>
          <div className="min-h-[250px] flex justify-center items-center">
            <h2 className="text-lg text-white">
              No {data === "collections" ? "Collections" : "Likes"} Yet
            </h2>
          </div>
        </>
      )}

      <div className="flex-1 sm:flex sm:flex-nowrap flex-wrap md:gap-[30px] gap-[20px]">
        {data?.map((playlist, index) => (
          <PlaylistCard
            isTargetPlaylist={playlist === currentPlaylist}
            onPlaylistClick={handlePlaylistClick}
            playlist={playlist}
            index={index}
            key={`likesCard-${index}`}
          />
        ))}
        {isFetching && <Loader className="h-100%" />}
      </div>
    </div>
  );
};

export default MyCollectionsAndLikes;

import Loader from "../components/Loader";
import { useState } from "react";
import PlaylistCard from "../components/Cards/PlaylistCard";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import PlaylistSongCard from "../components/Cards/PlaylistSongCard";
import SubHeading from "../components/SubHeading";

const MyCollectionsAndLikes = ({ activeButton }) => {
  const propertyName = activeButton;
  const dispatch = useDispatch();
  const { favouritesSong } = useSelector((state) => state.persisted.favourites);
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
              No{" "}
              {activeButton === "collections"
                ? "Collections"
                : "Liked Playlist"}{" "}
              Yet
            </h2>
          </div>
        </>
      )}

      <div className="flex-1 sm:flex sm:flex-nowrap flex-wrap md:gap-[30px] gap-[20px] mb-16">
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

      {activeButton === "favourites" && favouritesSong.length >= 1 ? (
        <>
          <SubHeading text="Liked Songs" />
          <div className="flex flex-col gap-3 text-white">
            {favouritesSong?.map((song, i) => {
              const handlePlayClick = () => {
                dispatch(setActiveSong({ song, data: favouritesSong, i }));
                dispatch(playPause(true));
              };

              return (
                <PlaylistSongCard
                  handlePlayClick={() => handlePlayClick(song, i)}
                  song={song}
                  key={`PlaylistSongCard-${i}`}
                />
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyCollectionsAndLikes;

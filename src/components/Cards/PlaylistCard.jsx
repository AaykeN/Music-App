import React from "react";
import { Link } from "react-router-dom";
import { playPause, setActiveSong } from "../../redux/features/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoPlay, IoPause } from "react-icons/io5";

const PlaylistCard = ({
  playlist,
  index,
  onPlaylistClick,
  isTargetPlaylist,
}) => {
  const { isPlaying } = useSelector((state) => state.persisted.player);
  const dispatch = useDispatch();
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data: playlist.files, i }));
    onPlaylistClick(playlist);
    dispatch(playPause(true));
  };

  const handlePauseClick = () => {
    onPlaylistClick(null);
    dispatch(playPause(false));
  };

  return (
    <Link to={`/playlist/${playlist.id}`} key={`playlist-${index}`}>
      <div className="overflow-hidden cursor-pointer rounded-3xl relative group transition-all aspect-auto flex animate-slowfade md:mt-0 mb-[20px]">
        <div className="rounded-lg cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-20 text-white flex items-end">
          <div className="flex">
            <div className="p-4 text-xl">
              <h2 className="font-medium leading-6 md:text-xl text-base">
                {playlist.title}
              </h2>
              <p className="font-extralight text-sm mb-3">
                {playlist.files?.length} Songs
              </p>
              <p className="text-sm hidden group-hover:block mb-3 group-hover:animate-slideup font-extralight">
                2.3m Likes
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
          className="hidden absolute  right-4 bottom-4 group-hover:block animate-slideup"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <div className="p-2 transition-all rounded-full bg-[#FACD66] active:scale-90 box-shadow md:mx-0 mx-3 cursor-pointer">
            {isTargetPlaylist && isPlaying ? (
              <IoPause color="#ffffff" onClick={handlePauseClick} />
            ) : (
              <IoPlay
                color="#ffffff"
                onClick={() => handlePlayClick(playlist.files[0], 0)}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlaylistCard;

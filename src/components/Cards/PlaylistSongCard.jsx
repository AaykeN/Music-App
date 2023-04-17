import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import {
  addSongToFavorite,
  removeSongFromFavorite,
} from "../../redux/features/favouriteSlice";

const PlaylistSongCard = ({ handlePlayClick, song }) => {
  const { favouritesSong } = useSelector((state) => state.persisted.favourites);
  const { activeSong, isPlaying } = useSelector(
    (state) => state.persisted.player
  );
  const isActiveSong =
    activeSong &&
    activeSong.title === song.title &&
    activeSong.artist === song.artist;

  const dispatch = useDispatch();
  const [likedSong, setLikedSong] = useState(() => {
    const isFavouriteSong = favouritesSong.some(
      (favourite) =>
        favourite.title === song?.title && favourite.artist === song?.artist
    );
    return !!isFavouriteSong;
  });

  const handleFavouriteToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (likedSong) {
      dispatch(removeSongFromFavorite(song.id));
    } else {
      dispatch(addSongToFavorite(song));
    }
    setLikedSong(!likedSong);
  };

  return (
    <div
      onClick={handlePlayClick}
      className={`bg-[#33373B]/[37%] hover:bg-[#2e323440] cursor-pointer rounded-2xl flex py-2 px-3 md:p-3 items-center gap-4 md:gap-10 lg:gap-28 z-1`}
      key={`song-${song.id}`}
    >
      <div className="flex items-center">
        <img
          src={song.cover}
          alt="art cover"
          className="w-12 h-auto rounded-xl object-cover aspect-square"
        />
        <div className="md:ml-3 lg:ml-5 hidden md:flex z-2 items-center">
          <button onClick={handleFavouriteToggle}>
            {likedSong ? (
              <BsFillHeartFill className="text-[#ce4b4b]/[80%] w-5 h-5" />
            ) : (
              <BsHeart className="text-[#ffffff]/[80%] w-5 h-5" />
            )}
          </button>
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

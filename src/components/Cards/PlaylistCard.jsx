import React from "react";
import { Link } from "react-router-dom";

const PlaylistCard = ({ playlist, index }) => {
  console.log(playlist.playlist);

  return (
    <Link to={`/playlist/${playlist.id}`} key={`playlist-${index}`}>
      <div className="overflow-hidden cursor-pointer rounded-3xl relative group aspect-auto flex animate-slowfade">
        <div className="rounded-lg z-20 cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-20 text-white flex items-end">
          <div>
            <div className="p-4 text-xl">
              <h2 className="font-medium leading-6 md:text-xl text-base">
                {playlist.title}
              </h2>
              <p className="font-extralight text-sm mb-3">
                {playlist.files?.length} Songs
              </p>
            </div>
          </div>
        </div>
        <img
          alt={playlist.title}
          className="flex object-cover object-top group-hover:scale-110 transition duration-300 ease-in-out md:w-[270px] md:h-[290px] w-[200px] h-[220px] aspect-square"
          src={playlist.cover}
        />
      </div>
    </Link>
  );
};

export default PlaylistCard;
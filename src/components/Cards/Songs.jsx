import React from "react";

const Songs = ({ song }) => {
  return (
    <div className="relative w-full h-fit group cursor-pointer">
      <div
        className={`absolute inset-0 justify-center items-center h-[190px] bg-black bg-opacity-50 group-hover:flex rounded-3xl ${
          activeSong?.title === song.title
            ? "flex bg-black bg-opacity-70"
            : "hidden"
        }`}
      >
        <PlayPause
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>

      <img
        src={song.cover}
        alt="song_img"
        className={`w-[190px] h-[190px] rounded-3xl `}
      />
      <h3 className="text-md text-white mt-2 ">{song.title}</h3>
      <p className=" text-base text-white text-opacity-50 font-light">
        {song.artist}
      </p>
    </div>
  );
};

export default Songs;

import { playListButton } from "../assets/constants";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetPlaylistQuery } from "../redux/services/service";

import LikeButton from "../components/Buttons/LikeButton";
import AddCollectionBtn from "../components/Buttons/AddCollectionBtn";
import PlayAllBtn from "../components/Buttons/PlayAllBtn";
import PlaylistSongCard from "../components/Cards/PlaylistSongCard";

const findPlaylist = (playlistId) => {
  const { data, isFetching, error } = useGetPlaylistQuery();
  const playlist = data?.find((p) => p.id === playlistId);
  return { playlist, isFetching, error, data };
};

const Playlist = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const { playlist, isFetching, error, data } = findPlaylist(playlistId);
  const { activeSong, isPlaying } = useSelector(
    (state) => state.persisted.player
  );
  const playListSongs = playlist?.files;
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data: playlist.files, i }));
    dispatch(playPause(true));
  };

  console.log(playlist);

  return (
    <>
      <div className="text-white text-xl px-7 py-7 pb-[130px]">
        <div className="lg:flex lg:gap-8 lg:items-end">
          <img
            src={playlist?.cover}
            alt="cover_art"
            className="rounded-[50px] w-full h-auto aspect-square sm:w-[370px] sm:h-[370px] object-cover object-center "
          />
          <div className="mt-7 lg:mt-0">
            <h2 className="text-[#A4C7C6] text-4xl font-bold mb-3">
              {playlist?.title}
            </h2>
            <div className="text-base text-white/90 font-light lg:max-w-[700px]">
              <p className="mb-3">{playlist?.info}</p>
              <p>{playListSongs?.length} Songs ~ 16 hrs+</p>
            </div>
            <div className="flex gap-4 mt-5 lg:mt-14 flex-wrap md:flex-nowrap">
              <button
                className="bg-[#33373B]/[37%] hover:bg-[#2e323440] w-fit py-[10px] md:px-[20px] px-[15px] rounded-full text-start flex items-center gap-2 md:gap-3"
                onClick={() => handlePlayClick(playlist.files[0], 0)}
              >
                <PlayAllBtn />
              </button>
              <AddCollectionBtn playlist={playlist} />

              <button className="bg-[#33373B]/[37%] hover:bg-[#2e323440] w-fit py-[10px] md:px-[20px] px-[15px] lg:px-[10px] rounded-full text-start flex items-center gap-2 md:gap-3">
                <LikeButton
                  className="h-5 w-auto"
                  alt="Like"
                  playlist={playlist}
                />
                <p className="font-light text-xs md:text-sm lg:hidden block">
                  Like
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5 lg:mt-14">
          {playListSongs?.map((song, i) => {
            const handlePlayClick = () => {
              dispatch(setActiveSong({ song, data: playlist.files, i }));
              dispatch(playPause(true));
            };

            // Check if this song is active
            const isActiveSong = activeSong && activeSong.id === song.id;
            return (
              <PlaylistSongCard
                isActiveSong={isActiveSong}
                handlePlayClick={() => handlePlayClick(song, i)}
                // handlePlayClick={handlePlayClick}
                song={song}
                key={`PlaylistSongCard-${i}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Playlist;

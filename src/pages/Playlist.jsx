import { playListButton } from "../assets/constants";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetPlaylistQuery } from "../redux/services/service";
import LikeButton from "../components/Buttons/LikeButton";
import AddCollectionBtn from "../components/Buttons/AddCollectionBtn";
import PlayAllBtn from "../components/Buttons/PlayAllBtn";
import PlaylistSongCard from "../components/Cards/PlaylistSongCard";
import Loader from "../components/Loader";

const findPlaylist = (playlistId) => {
  const { data, isFetching, error } = useGetPlaylistQuery();
  const playlist = data?.find((p) => p.id === playlistId);
  return { playlist, isFetching, error, data };
};

export const calculateTotalTime = (playListSongs) => {
  let totalSeconds = 0;
  for (let i = 0; i < playListSongs?.length; i++) {
    const durationParts = playListSongs[i].duration.split(":");
    const minutes = parseInt(durationParts[0]);
    const seconds = parseInt(durationParts[1]);
    totalSeconds += minutes * 60 + seconds;
  }
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const totalTime = { minutes: minutes, seconds: seconds };
  return totalTime;
};

const Playlist = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const { playlist, isFetching, error, data } = findPlaylist(playlistId);
  const playListSongs = playlist?.files;
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data: playlist.files, i }));
    dispatch(playPause(true));
  };

  const totalTime = calculateTotalTime(playListSongs);

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
              <p>
                {playListSongs?.length} Songs ~ {totalTime.minutes} mins{" "}
                {totalTime.seconds} secs
              </p>
            </div>
            <div className="flex gap-4 mt-5 lg:mt-14 flex-wrap md:flex-nowrap">
              <button
                className="bg-[#33373B]/[37%] hover:bg-[#2e323440] w-fit py-[10px] md:px-[20px] px-[15px] rounded-full text-start flex items-center gap-2 md:gap-3"
                onClick={() => handlePlayClick(playlist.files[0], 0)}
              >
                <PlayAllBtn />
              </button>
              <AddCollectionBtn playlist={playlist} />

              <LikeButton
                likeClass="bg-[#33373B]/[37%] hover:bg-[#2e323440] w-fit py-[10px] md:px-[20px] px-[15px] lg:px-[10px] rounded-full text-start flex items-center gap-2 md:gap-3"
                className="h-5 w-auto"
                alt="Like"
                playlist={playlist}
              />
              <p className="font-light text-xs md:text-sm lg:hidden block">
                Like
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5 lg:mt-14">
          {playListSongs?.map((song, i) => {
            const handlePlayClick = () => {
              dispatch(setActiveSong({ song, data: playlist.files, i }));
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
          {isFetching && <Loader className="h-100%" />}
        </div>
      </div>
    </>
  );
};

export default Playlist;

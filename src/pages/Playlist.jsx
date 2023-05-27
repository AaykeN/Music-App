import { useDispatch } from "react-redux";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import LikeButton from "../components/Buttons/LikeButton";
import PlayAllBtn from "../components/Buttons/PlayAllBtn";
import { useGetPlaylistQuery } from "../redux/services/service";
import PlaylistSongCard from "../components/Cards/PlaylistSongCard";
import AddCollectionBtn from "../components/Buttons/AddCollectionBtn";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

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
      <div className="bg-gradient-to-t from-[#1d2123] to-[#1d21232c] absolute z-[-2] -left-0 -top-0 max-w-[1920px] w-[100%] h-[100vh]" />
      <img
        src={playlist?.cover}
        alt="bg-cover"
        className="absolute z-[-3] opacity-[0.07] -left-0 -top-0 w-[100vw] h-[100vh] object-cover object-center"
      />
      <div>
        <div className="text-white text-xl px-7 pb-[130px] container-padding">
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
                <PlayAllBtn
                  handleClick={() => handlePlayClick(playlist.files[0], 0)}
                  playALlClass="bg-[#33373B]/[37%] hover:bg-[#2e323440] w-fit py-[10px] md:px-[20px] px-[15px] rounded-full text-start flex items-center gap-2 md:gap-3"
                />
                <AddCollectionBtn playlist={playlist} />

                <LikeButton
                  likeClass="bg-[#33373B]/[37%] hover:bg-[#2e323440] w-fit py-[10px] md:px-[20px] px-[15px] lg:px-[10px] rounded-full text-start flex items-center gap-2 md:gap-3"
                  className="h-5 w-auto"
                  alt="Like"
                  playlist={playlist}
                />
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
      </div>
    </>
  );
};

export default Playlist;

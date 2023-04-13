import { playListButton } from "../assets/constants";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useQuery } from "react-query";
import { useGetPlaylistQuery } from "../redux/services/service";
import { HiDotsVertical, HiOutlineHeart } from "react-icons/hi";

const findPlaylist = (playlistId) => {
  const { data, isFetching, error } = useGetPlaylistQuery();
  const playlist = data?.find((p) => p.id === playlistId);
  return { playlist, isFetching, error, data };
};

const Playlist = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const { playlist, isFetching, error, data } = findPlaylist(playlistId);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const playListSongs = playlist?.files;

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
              {playListButton.map((button, index) => {
                const Icon = button.icon;

                return (
                  <div key={index}>
                    {button.name === "Like" ? (
                      <button className="bg-[#33373B]/[37%] hover:bg-[#2e323440] w-fit py-[10px] md:px-[20px] px-[15px] lg:px-[10px] rounded-full text-start flex items-center gap-2 md:gap-3">
                        <Icon
                          className="h-5 w-auto"
                          alt={button.name}
                          playlist={playlist}
                        />
                        <p className="font-light text-xs md:text-sm lg:hidden block">
                          {button.name}
                        </p>
                      </button>
                    ) : (
                      <button
                        key={index}
                        className="bg-[#33373B]/[37%] hover:bg-[#2e323440] w-fit py-[10px] md:px-[20px] px-[15px] rounded-full text-start flex items-center gap-2 md:gap-3"
                      >
                        <Icon className="h-5 w-auto" alt={button.name} />

                        <p className="font-light text-xs md:text-sm">
                          {button.name}
                        </p>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5 lg:mt-16">
          {playListSongs?.map((song, i) => {
            const handlePlayClick = () => {
              dispatch(setActiveSong({ song, data, i }));
              dispatch(playPause(true));
            };

            // Check if this song is active
            const isActiveSong = activeSong && activeSong.id === song.id;

            return (
              <div
                onClick={handlePlayClick}
                className={`bg-[#33373B]/[37%] hover:bg-[#2e323440]  cursor-pointer rounded-2xl flex py-2 px-3 md:p-3 items-center gap-4 md:gap-10 lg:gap-28`}
                key={`song-${song.id}`}
              >
                <div className="flex items-center">
                  <img
                    src={song.cover}
                    alt="art cover"
                    className="w-14 h-auto rounded-lg object-cover"
                  />
                  <div className="md:ml-3 lg:ml-5 hidden md:block">
                    <HiOutlineHeart className="w-6 h-auto text-white" />
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
          })}
        </div>
      </div>
    </>
  );
};

export default Playlist;

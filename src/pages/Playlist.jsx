import { playListButton } from "../assets/constants";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useQuery } from "react-query";
import { useGetPlaylistQuery } from "../redux/services/service";

const findPlaylist = (playlistId) => {
  const { data, isFetching, error } = useGetPlaylistQuery();
  const playlist = data?.find((p) => p.id === playlistId);
  return { playlist, isFetching, error };
};

const Playlist = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const { playlist, isFetching, error } = findPlaylist(playlistId);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <>
      <div className="text-white text-xl px-7 py-7 pb-[130px]">
        <div className="lg:flex lg:gap-8 lg:items-end">
          <img
            src={playlist?.cover}
            alt="cover_art"
            className="rounded-[35px] w-full sm:w-[370px] sm:h-[370px] object-cover object-center "
          />
          <div className="mt-7 lg:mt-0">
            <h2 className="text-[#A4C7C6] text-4xl font-bold mb-3">
              {playlist?.title}
            </h2>
            <div className="text-base text-white/70 font-light lg:max-w-[700px]">
              <p className="mb-3">{playlist?.info}</p>
              <p>64 songs ~ 16 hrs+</p>
            </div>
            <div className="flex gap-4 mt-5 lg:mt-10 flex-wrap md:flex-nowrap">
              {playListButton.map((button) => (
                <button className="bg-[#33373B]/[37%] hover:bg-[#2e323440] w-fit py-[10px] md:px-[20px] px-[15px] rounded-full text-start flex items-center gap-2 md:gap-3">
                  <img
                    src={button.icon}
                    alt={button.name}
                    className="h-5 w-auto"
                  />
                  <p className="font-light text-xs md:text-sm ">
                    {button.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>test</div>
      </div>
    </>
  );
};

export default Playlist;

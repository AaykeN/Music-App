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
  return { playlist, isFetching, error };
};

const Playlist = () => {
  const dispatch = useDispatch();
  const { playlistId } = useParams();
  const { playlist, isFetching, error } = findPlaylist(playlistId);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const playListSongs = playlist?.files;

  return (
    <>
      <div className="text-white text-xl px-7 py-7 pb-[130px]">
        <div className="lg:flex lg:gap-8 lg:items-end">
          <img
            src={playlist?.cover}
            alt="cover_art"
            className="rounded-[50px] w-full sm:w-[370px] sm:h-[370px] object-cover object-center "
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

        <div className="flex flex-col gap-3 mt-16">
          {playListSongs?.map((song) => (
            <div
              className="bg-[#33373B]/[37%] rounded-2xl flex p-3 items-center gap-4 md:gap-16 "
              key={song.id}
            >
              <div className="flex items-center">
                <img
                  src={song.cover}
                  alt="art cover"
                  className="w-14 h-auto rounded-lg object-cover"
                />
                <div className="md:ml-5 hidden md:block">
                  <HiOutlineHeart className="w-6 h-auto" />
                </div>
              </div>
              <div className="flex w-full md:items-center text-base font-light">
                <div className="flex-1 flex flex-col md:flex-row md:items-center">
                  <p className=" flex-1 flex-shrink-0 text-start SONGTITLE">
                    {song.title}- {song.artist}
                  </p>
                  <p className=" flex-1 text-start md:text-center">Single</p>
                </div>
                <div className="md:flex-1 flex flex-col-reverse md:flex-row ">
                  <p className=" flex-1 text-end md:text-center p3">
                    {song.duration}
                  </p>
                  <div className="flex-1 flex flex-shrink-5 justify-end p4">
                    <HiDotsVertical />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Playlist;

// <div
//   className="bg-[#33373B]/[37%] rounded-2xl flex p-3 items-center justify-between"
//   key={song.id}
// >
//   <div className="flex items-center gap-3 max-w-[200px] w-[100%]">
//     <img src={song.cover} alt="" className="w-12 h-12 rounded-lg" />
//     <HiOutlineHeart />
//   </div>
//   <div className="flex flex-col justify-center flex-grow-1 flex-basis-0 max-w-[800px] w-[100%] md:flex-row md:justify-between">
//     <p className="">
//       {song.title}- {song.artist}
//     </p>
//     <p className="">Single</p>
//   </div>
//   <div className="flex flex-col justify-center flex-grow-1 flex-basis-0 max-w-[500px] w-[100%] md:flex-row md:justify-between">
//     <p className="">{song.duration}</p>
//     <HiDotsVertical />
//   </div>
// </div>;

// ------------------
// <div className="flex flex-col gap-3 mt-16">
//   {playListSongs?.map((song) => (
//     <div
//       className="bg-[#33373B]/[37%] rounded-2xl flex p-3 items-center gap-16"
//       key={song.id}
//     >
//       <div className="flex items-center gap-3 ">
//         <img
//           src={song.cover}
//           alt="art cover"
//           className="w-12 h-12 rounded-lg"
//         />
//         <HiOutlineHeart className="w-4 -4" />
//       </div>
//       <div className="flex flex-col justify-start md:flex-row md:justify-between w-full">
//         <p className=" max-w-[300px] w-[100%] ">
//           {song.title}- {song.artist}
//         </p>
//         <p className="">Single</p>
//         <p className="">{song.duration}</p>
//         <HiDotsVertical />
//       </div>
//     </div>
//   ))}
// </div>;

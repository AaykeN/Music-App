import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { calculateTotalTime } from "../pages/Playlist";
import { useGetPlaylistQuery } from "../redux/services/service";
import SubHeading from "./SubHeading";
import LikeButton from "./Buttons/LikeButton";

const PlaylistCardSkeleton = () => (
  <div className="md:w-full min-w-[400px] flex flex-row items-center bg-[#1A1E1F] rounded-3xl md:p-5 sm:p-4 p-3 cursor-pointer mb-4 animate-pulse">
    <div className="flex-1 flex lg:flex-row justify-between md:items-center items-start ">
      <div className="lg:flex ">
        <div className="mx-3 lg:mx-0 mb-3 lg:mb-0">
          <div className="w-32 h-32 md:w-20 md:h-20 rounded-2xl bg-gray-700"></div>
        </div>
        <div className="flex-1 flex flex-col justify-center mx-3">
          <div className="w-48 h-6 rounded-lg bg-gray-700"></div>
          <div className="w-40 h-4 rounded-lg bg-gray-700 mt-1"></div>
          <div className="w-20 h-4 rounded-lg bg-gray-700 mt-7"></div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2 border-[1px] rounded-full border-gray-500 bg-gray-700"></div>
      </div>
    </div>
  </div>
);

const TopChart = () => {
  const { data, isFetching, error } = useGetPlaylistQuery();
  const dispatch = useDispatch();

  const topChartCard = data?.slice(0, 3).map((playlist, index) => {
    const playListSongs = playlist?.files;
    const totalTime = calculateTotalTime(playListSongs);

    return (
      <Link to={`/playlist/${playlist?.id}`} key={playlist.id} className="">
        <div className="md:w-full min-w-[400px] flex flex-row items-center bg-[#1A1E1F] rounded-3xl md:p-5 sm:p-4 p-3 cursor-pointer mb-4 hover:bg-[#121414a5]">
          <div className="flex-1 flex lg:flex-row justify-between md:items-center items-start ">
            <div className="lg:flex ">
              <div className="mx-3 lg:mx-0 mb-3 lg:mb-0">
                <img
                  className="md:w-20 md:h-20 w-32 h-32 rounded-2xl mr-2 aspect-square object-cover"
                  src={playlist.cover}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center mx-3">
                <p className="text-xl font-normal text-white">
                  {playlist.title}
                </p>
                <p className="text-sm text-gray-300 mt-1 text-opacity-50">
                  {playlist.info.replace(/^(.{40}[^\s]*).*/, "$1")}...
                </p>
                <p className="text-base text-gray-300 md:mt-1 mt-7">
                  {totalTime.minutes}:{totalTime.seconds}
                </p>
              </div>
            </div>
            <LikeButton
              playlist={playlist}
              likeClass="p-3 border-[1px] rounded-full border-gray-500/[50%] transition-all active:scale-125 flex items-center z-[11]"
            />
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="md:w-[100%] lg:w-[40%] w-100%">
      <SubHeading text="Top Chart" />
      <div className="md:block flex lg:overflow-y-auto overflow-x-scroll hide-scrollbar md:h-[420px] h-[320px] md:gap-0 gap-7">
        {isFetching ? <PlaylistCardSkeleton /> : topChartCard}
      </div>
    </div>
  );
};

export default TopChart;

import React from "react";
import { Link } from "react-router-dom";
import { useGetPlaylistQuery } from "../redux/services/service";

const TopChart = () => {
  const { data, isFetching, error } = useGetPlaylistQuery();

  const playListCard = data?.slice(0, 3).map((playlist, index) => {
    return (
      <div
        className="w-full flex flex-row items-center bg-[#1A1E1F] rounded-3xl md:p-5 sm:p-4 p-3 cursor-pointer mb-4"
        key={playlist.id}
      >
        <div className="flex-1 flex lg:flex-row flex-col justify-between items-center">
          <img className="w-20 h-20 rounded-2xl mr-2" src={playlist.cover} />
          <div className="flex-1 flex flex-col justify-center mx-3">
            <p className="text-xl font-normal text-white">{playlist.title}</p>
            <p className="text-sm text-gray-300 mt-1 text-opacity-50">
              {playlist.info.replace(/^(.{40}[^\s]*).*/, "$1")}...
            </p>
            <p className="text-base text-gray-300 mt-1">12:24</p>
          </div>
          <button class="p-2 border-[1px] rounded-full border-gray-500 transition-all active:scale-125">
            <svg
              class="text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.44 3.102c-1.81 0-3.43.88-4.44 2.23a5.549 5.549 0 0 0-4.44-2.23c-3.07 0-5.56 2.5-5.56 5.59 0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="md:w-[100%] lg:w-[40%]">
      <h2 className="text-2xl font-bold text-white mb-4">Top Chart</h2>
      <div className="lg:overflow-y-auto overflow-x hide-scrollbar h-[420px] ">
        {playListCard}
      </div>
    </div>
  );
};

// ---------------------------------

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

const TopChart2 = () => {
  const { data, isFetching, error } = useGetPlaylistQuery();
  const { favourites } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const [isFavourites, setIsFavourites] = useState(() => {
    const isFavouritesPlaylist = favourites.find(
      (fav) => fav.id === playlist.id
    );
    return !!isFavouritesPlaylist;
  });

  const playListCard = data?.slice(0, 3).map((playlist, index) => {
    const handleFavourites = (e, playlist) => {
      e.preventDefault();
      console.log(playlist);
      if (isFavourites) {
        dispatch(removeFavourite(playlist.id));
        setIsFavourites((prev) => !prev);
      } else {
        dispatch(addFavourite(playlist));
        setIsFavourites((prev) => !prev);
      }
    };

    return (
      <Link to={`/playlist/${playlist?.id}`} key={playlist.id} className="z-10">
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
                <p className="text-base text-gray-300 md:mt-1 mt-7">12:24</p>
              </div>
            </div>
            <button className=" p-3 border-[1px] rounded-full border-gray-500/[50%] transition-all active:scale-125 flex items-center z-[11]">
              {isFavourites ? (
                <BsFillHeartFill
                  className="text-[#ce4b4b]/[80%] w-5 h-5 pt-[2px]"
                  onClick={() => handleFavourites(e, playlist)}
                />
              ) : (
                <BsHeart
                  className="text-[#FACD66]/[80%] w-5 h-5 pt-[2px]"
                  onClick={(e) => handleFavourites(e, playlist)}
                />
              )}
            </button>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="md:w-[100%] lg:w-[40%] w-100%">
      <h2 className="text-2xl font-bold text-white mb-4">Top Chart</h2>
      <div className="md:block flex lg:overflow-y-auto overflow-x-scroll hide-scrollbar md:h-[420px] h-[320px] md:gap-0 gap-7">
        {isFetching ? <PlaylistCardSkeleton /> : playListCard}
      </div>
    </div>
  );
};

{
  /* {isFetching ? (
          <div className="md:w-full min-w-[400px]  flex flex-row items-center dark:bg-gray-700 animate-pulse rounded-3xl md:p-5 sm:p-4 p-3 cursor-pointer mb-4"></div>
        ) : (
          playListCard
        )} */
}

export default TopChart;

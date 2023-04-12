import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LikedItem = () => {
  const { favourites } = useSelector((state) => state.favourites);

  return (
    <>
      {!favourites.length && (
        <>
          <div className="min-h-[250px] flex justify-center items-center">
            <h2 className="text-lg text-white">No Likes Yet</h2>
          </div>
        </>
      )}
      <div className="flex flex-wrap md:gap-[30px] gap-[20px]">
        {favourites?.map((favPlaylist, index) => (
          <Link to={`/playlist/${favPlaylist?.id}`} key={index}>
            <div className="overflow-hidden cursor-pointer rounded-3xl relative group aspect-auto flex">
              <div className="rounded-lg z-20 cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-20 text-white flex items-end">
                <div>
                  <div className="p-4 text-xl  ">
                    <h2 className="font-medium leading-6 md:text-xl text-base">
                      {favPlaylist.title}
                    </h2>
                    <p className="font-extralight text-sm mb-3">
                      {favPlaylist.files.length} Songs
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt={favPlaylist.title}
                className="flex object-cover object-top group-hover:scale-110 transition duration-300 ease-in-out md:w-[270px] md:h-[290px] w-[200px] h-[220px] aspect-square"
                src={favPlaylist.cover}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default LikedItem;

// <div className="overflow-hidden cursor-pointer rounded-3xl relative group w-[230px] h-[230px] aspect-square">
//   <div className="rounded-3xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
//     <div>
//       <div className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 translatetransition duration-300 ease-in-out">
//         <div className="font-bold">{favPlaylist.title}</div>
//       </div>
//     </div>
//   </div>
//   <img
//     alt=""
//     className="object-cover aspect-square group-hover:scale-110 transition duration-300 ease-in-out "
//     src={favPlaylist.cover}
//   />
// </div>;

// <div className="overflow-hidden cursor-pointer rounded-3xl relative group w-[230px] h-[230px] aspect-square">
//   <div className="rounded-3xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"></div>
//   <img
//     alt=""
//     className="object-cover aspect-square group-hover:scale-110 transition duration-300 ease-in-out "
//     src={favPlaylist.cover}
//   />
//   <div className="absolute bottom-0 left-0 w-full p-4 text-white">
//     <div className="font-bold">{favPlaylist.title}</div>
//   </div>
// </div>;

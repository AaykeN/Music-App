import { useSelector } from "react-redux";
import PlaylistCard from "../components/Cards/PlaylistCard";

const Likes = () => {
  const { favourites } = useSelector((state) => state.favourites);
  console.log(favourites);
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
        {favourites?.map((playlist, index) => (
          <PlaylistCard playlist={playlist} index={index} />
        ))}
      </div>
    </>
  );
};

export default Likes;

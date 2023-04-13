import { BsFillHeartFill, BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../../redux/features/favouriteSlice";
import { useEffect, useState } from "react";

const LikeButton = ({ playlist }) => {
  const { favourites } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(() => {
    const isFavouritePlaylist = favourites.some(
      (favourite) => favourite.id === playlist?.id
    );
    return !!isFavouritePlaylist;
  });

  const handleFavouriteToggle = (e) => {
    e.preventDefault();
    if (liked) {
      dispatch(removeFavourite(playlist.id));
    } else {
      dispatch(addFavourite(playlist));
    }
    setLiked(!liked);
  };

  return (
    <>
      {liked ? (
        <BsFillHeartFill
          className="text-[#ce4b4b]/[80%] w-5 h-5 pt-[2px] "
          onClick={handleFavouriteToggle}
        />
      ) : (
        <BsHeart
          className="text-[#FACD66]/[80%] w-5 h-5 pt-[2px]"
          onClick={handleFavouriteToggle}
        />
      )}
    </>
  );
};

export default LikeButton;

import { ReactComponent as PlayAll } from "../../assets/img/playAll.svg";

const PlayAllBtn = () => {
  //   const { favourites } = useSelector((state) => state.favourites);
  //   const dispatch = useDispatch();
  //   const [liked, setLiked] = useState(() => {
  //     const isFavouritePlaylist = favourites.some(
  //       (favourite) => favourite.id === playlist.id
  //     );
  //     return !!isFavouritePlaylist;
  //   });

  //   const handleFavouriteToggle = (e) => {
  //     e.preventDefault();
  //     if (liked) {
  //       dispatch(removeFavourite(playlist.id));
  //     } else {
  //       dispatch(addFavourite(playlist));
  //     }
  //     setLiked(!liked);
  //   };

  return (
    <>
      <PlayAll className="h-5 w-auto" alt="Add to Collection" />
      <p className="font-light text-xs md:text-sm">Play All</p>
    </>
  );
};

export default PlayAllBtn;

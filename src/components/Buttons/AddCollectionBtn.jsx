import React, { useState } from "react";
import { ReactComponent as AddCollection } from "../../assets/img/music-square-add.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addCollection,
  removeCollection,
} from "../../redux/features/collectionSlice";

const AddCollectionBtn = ({ playlist }) => {
  const { collections } = useSelector((state) => state.persisted.collections);
  const dispatch = useDispatch();
  const [isInCollection, setIsInCollection] = useState(() => {
    const isAlreadyInCollection = collections.find(
      (collection) => collection.id === playlist?.id
    );
    return !!isAlreadyInCollection;
  });

  const handleFavouriteToggle = (e) => {
    e.preventDefault();
    if (isInCollection) {
      dispatch(removeCollection(playlist.id));
    } else {
      dispatch(addCollection(playlist));
    }
    setIsInCollection(!isInCollection);
  };

  return (
    <button
      className="bg-[#33373B]/[37%] hover:bg-[#2e323440] w-fit py-[10px] md:px-[20px] px-[15px] rounded-full text-start flex items-center gap-2 md:gap-3"
      onClick={handleFavouriteToggle}
    >
      <AddCollection className="h-5 w-auto" alt="Add to Collection" />

      <p className="font-light text-xs md:text-sm">
        {isInCollection ? "Remove from Collection" : "Add to Collection"}
      </p>
    </button>
  );
};

export default AddCollectionBtn;

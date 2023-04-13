import React from "react";
import { useSelector } from "react-redux";
import PlaylistCard from "./Cards/PlaylistCard";

const MyCollection = () => {
  const { collections } = useSelector((state) => state.collections);
  console.log(collections);

  return (
    <>
      {!collections.length && (
        <>
          <div className="min-h-[250px] flex justify-center items-center">
            <h2 className="text-lg text-white">No Collections Yet</h2>
          </div>
        </>
      )}
      <div className="flex flex-wrap md:gap-[30px] gap-[20px]">
        {collections?.map((playlist, index) => (
          <PlaylistCard playlist={playlist.playlist} index={index} />
        ))}
      </div>
    </>
  );
};

export default MyCollection;

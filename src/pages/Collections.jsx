import React from "react";

const Collections = () => {
  return (
    <div className="text-md px-7 py-7 pb-[130px]">
      <div className="flex gap-3">
        <button
          className={`hover:bg-[#FACD66] border-[#595b59] text-[#595b59] hover:text-[#131313]  border-[1px] rounded-full px-[20px] py-[10px]`}
        >
          My Collection
        </button>
        <button
          className={`hover:bg-[#FACD66] border-[#595b59] text-[#595b59] border-[1px] hover:text-[#131313] rounded-full px-[20px] py-[10px]`}
        >
          Likes
        </button>
      </div>
    </div>
  );
};

export default Collections;

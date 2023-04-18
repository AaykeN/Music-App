import { HiDotsVertical } from "react-icons/hi";
import { Popover } from "@headlessui/react";

const PopoverBtn = ({ handleFavouriteToggle, likedSong }) => {
  return (
    <>
      <Popover className="relative">
        <Popover.Button className="border-none">
          <HiDotsVertical className="lg:mr-6 text-[#FACD66] border-none" />
        </Popover.Button>

        <Popover.Panel className="absolute z-10 right-0 ">
          <div className="flex flex-col bg-[#1A1E1F] rounded-lg w-[100px] md:w-[140px] p-2">
            <button
              onClick={handleFavouriteToggle}
              className="text-start block md:hidden"
            >
              {likedSong ? <p>Unlike Song</p> : <p>Like Song</p>}
            </button>
            <p className="hidden md:block text-gray-400 cursor-default">
              Nothing Here
            </p>
          </div>
        </Popover.Panel>
      </Popover>
    </>
  );
};

export default PopoverBtn;

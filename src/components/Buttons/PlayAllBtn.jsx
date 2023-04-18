import { ReactComponent as PlayAll } from "../../assets/img/playAll.svg";

const PlayAllBtn = ({ handleClick }) => {
  return (
    <button
      className="bg-[#33373B]/[37%] hover:bg-[#2e323440] w-fit py-[10px] md:px-[20px] px-[15px] rounded-full text-start flex items-center gap-2 md:gap-3"
      onClick={handleClick}
    >
      <PlayAll className="h-5 w-auto" alt="Add to Collection" />
      <p className="font-light text-xs md:text-sm">Play All</p>
    </button>
  );
};

export default PlayAllBtn;

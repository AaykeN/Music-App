import { IoPlay, IoPause } from "react-icons/io5";

const PlayPauseBtn = ({ handlePlayPause, isPlaying }) => {
  return (
    <div
      onClick={handlePlayPause}
      className="p-2 transition-all rounded-full bg-[#FACD66] active:scale-90 box-shadow md:mx-0 mx-3 cursor-pointer"
    >
      {isPlaying ? <IoPause color="#ffffff" /> : <IoPlay color="#ffffff" />}
    </div>
  );
};

export default PlayPauseBtn;

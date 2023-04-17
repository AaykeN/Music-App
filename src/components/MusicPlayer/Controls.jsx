import { BsShuffle } from "react-icons/bs";
import { ReactComponent as Next } from "../../assets/img/Player/next.svg";
import { ReactComponent as Previous } from "../../assets/img/Player/previous.svg";
import { BsRepeat1 } from "react-icons/bs";
import PlayPauseBtn from "../Buttons/PlayPauseBtn";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsShuffle
      size={20}
      color={shuffle ? "#FACD66" : "white"}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
    <Previous
      className={`w-5 md:ml-0 ml-3 ${
        currentSongs?.length >= 1
          ? "cursor-pointer fill-[#ffffff]"
          : "fill-[#ffffffae]"
      }`}
      nClick={currentSongs?.length > 1 ? handlePrevSong : null}
    />
    <PlayPauseBtn isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
    <Next
      className={` w-6 md:mr-0 mr-3 ${
        currentSongs?.length >= 1
          ? "cursor-pointer fill-[#ffffff]"
          : "fill-[#ffffffae]"
      }`}
      onClick={currentSongs?.length > 1 ? handleNextSong : null}
    />

    <BsRepeat1
      size={20}
      color={repeat ? "#FACD66" : "white"}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
  </div>
);

export default Controls;

import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { ReactComponent as Next } from "../../assets/img/Player/next.svg";
import { ReactComponent as Previous } from "../../assets/img/Player/previous.svg";

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
    <BsArrowRepeat
      size={20}
      color={repeat ? "red" : "white"}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
    {currentSongs?.length && (
      <Previous
        // size={30}
        color="#FFF"
        className="cursor-pointer w-6"
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    )}
    {/* {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />} */}
    <Next
      // size={30}
      color="#FFF"
      className="cursor-pointer w-6"
      onClick={handleNextSong}
    />
    <BsShuffle
      size={20}
      color={shuffle ? "red" : "white"}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
  </div>
);

export default Controls;

// -----------------
// import React from "react";
// import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
// import {
//   BsArrowRepeat,
//   BsFillPauseFill,
//   BsFillPlayFill,
//   BsShuffle,
// } from "react-icons/bs";
// import { ReactComponent as Next } from "../../assets/img/Player/next.svg";
// import { ReactComponent as Previous } from "../../assets/img/Player/next.svg";

// const Controls = ({
//   isPlaying,
//   repeat,
//   setRepeat,
//   shuffle,
//   setShuffle,
//   currentSongs,
//   handlePlayPause,
//   handlePrevSong,
//   handleNextSong,
// }) => (
//   <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
//     <BsArrowRepeat
//       size={20}
//       color={repeat ? "red" : "white"}
//       onClick={() => setRepeat((prev) => !prev)}
//       className="hidden sm:block cursor-pointer"
//     />
//     {currentSongs?.length && (
//       <MdSkipPrevious
//         size={30}
//         color="#FFF"
//         className="cursor-pointer"
//         onClick={handlePrevSong}
//       />
//     )}
//     {isPlaying ? (
//       <BsFillPauseFill
//         size={45}
//         color="#FFF"
//         onClick={handlePlayPause}
//         className="cursor-pointer"
//       />
//     ) : (
//       <BsFillPlayFill
//         size={45}
//         color="#FFF"
//         onClick={handlePlayPause}
//         className="cursor-pointer"
//       />
//     )}
//     {/* {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />} */}
//     <MdSkipNext
//       size={30}
//       color="#FFF"
//       className="cursor-pointer"
//       onClick={handleNextSong}
//     />
//     <BsShuffle
//       size={20}
//       color={shuffle ? "red" : "white"}
//       onClick={() => setShuffle((prev) => !prev)}
//       className="hidden sm:block cursor-pointer"
//     />
//   </div>
// );

// export default Controls;

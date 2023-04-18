// import { BiSearch } from "react-icons/bi";
// import React, { useEffect, useRef, useState } from "react";
// import { setActiveSong, playPause } from "../redux/features/playerSlice";
// import {
//   useGetNewMusicQuery,
//   useGetPopularMusicQuery,
// } from "../redux/services/service";
// import { useDispatch } from "react-redux";

// const Searchbar = () => {
//   useEffect(() => {
//     if (newMusicData && popularMusicData) {
//       // Concatenate the data from both endpoints
//       const allData = [...newMusicData, ...popularMusicData];
//       const keywords = searchTerm.toLowerCase().split(" ");
//       const filtered = allData.filter((item) => {
//         // Use the concatenated data to filter the suggestions
//         for (const keyword of keywords) {
//           if (
//             !item.title.toLowerCase().includes(keyword) &&
//             !item.artist.toLowerCase().includes(keyword)
//           ) {
//             return false;
//           }
//         }
//         return true;
//       });
//       setFilteredSuggestions(filtered);
//       setShowSuggestions(true); // Show suggestions when filtered suggestions are available
//     } else {
//       setShowSuggestions(false); // Hide suggestions when there are no filtered suggestions
//     }
//   }, [newMusicData, popularMusicData, searchTerm]);

//   const dispatch = useDispatch();
//   const [showSuggestions, setShowSuggestions] = useState(false); // Add state for showing/hiding suggestions

//   const {
//     data: newMusicData,
//     isFetching: newMusicFetching,
//     error: newMusicError,
//   } = useGetNewMusicQuery();
//   const {
//     data: popularMusicData,
//     isFetching: popularMusicFetching,
//     error: popularMusicError,
//   } = useGetPopularMusicQuery();

//   const [searchTerm, setSearchTerm] = useState("");
//   const inputRef = useRef(null);
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);

//   const handleSearchTermChange = (event) => {
//     const value = event.target.value;
//     setSearchTerm(value);
//   };

//   const handleDocumentClick = (event) => {
//     if (inputRef.current && !inputRef.current.contains(event.target)) {
//       // Hide suggestions if click target is outside the ul element
//       setShowSuggestions(false);
//     }
//   };

//   if (newMusicFetching || popularMusicFetching) {
//     return <div>Loading...</div>;
//   }
//   if (newMusicError || popularMusicError) {
//     return (
//       <div>Error: {newMusicError?.message || popularMusicError?.message}</div>
//     );
//   }

//   useEffect(() => {
//     document.addEventListener("click", handleDocumentClick);
//     return () => {
//       document.removeEventListener("click", handleDocumentClick);
//     };
//   }, []); // Add event listener on mount and remove on unmount

//   return (
//     <div className="relative">
//       <input
//         ref={inputRef}
//         type="text"
//         value={searchTerm}
//         onChange={handleSearchTermChange}
//         placeholder="Search artists"
//         className="bg-transparent pl-12 py-1 focus:outline-none text-white w-[40%]"
//       />
//       {showSuggestions && searchTerm && filteredSuggestions.length > 0 && (
//         <ul
//           id="style-1"
//           className="absolute left-3 right-0 z-10 bg-[#1A1E1F] top-9 shadow-md overflow-y-auto max-h-60 w-[30%] rounded-lg"
//         >
//           {filteredSuggestions?.map((song, i) => {
//             const handlePlayClick = () => {
//               dispatch(setActiveSong({ song, data: song, i }));
//               dispatch(playPause(true));
//               setShowSuggestions(false);
//             };

//             return (
//               <li
//                 key={song.id}
//                 className="px-4 py-4 cursor-pointer text-white hover:text-[#FACD66]"
//                 onClick={() => handlePlayClick(song, i)}
//               >
//                 {song.title} - {song.artist}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//       <div className="absolute left-0 top-0 bottom-0 flex items-center pl-3">
//         <BiSearch className="fill-white/[25%] w-5 h-auto" />
//       </div>
//     </div>
//   );
// };

// export default Searchbar;

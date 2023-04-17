import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/img/logo.svg";
import { BiSearch } from "react-icons/bi";
import Searchbar from "./Searchbar";
import {
  useGetNewMusicQuery,
  useGetPlaylistQuery,
  useGetPopularMusicQuery,
} from "../redux/services/service";

const Topbar = () => {
  return (
    <>
      <div className="py-7 px-9 h-[65px] sticky top-0 z-20 bg-[#1d2123] hover:border-gray-100 scroll">
        <Searchbar />
      </div>
    </>
  );
};

export default Topbar;

// const Topbar = () => {
//   const inputRef = useRef(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const fakeData = [
//     { id: 1, title: "Blinding Lights", artist: "The Weeknd" },
//     { id: 2, title: "Levitating", artist: "Dua Lipa" },
//     { id: 3, title: "Leave The Door Open", artist: "Silk Sonic" },
//     { id: 4, title: "Drivers License", artist: "Olivia Rodrigo" },
//     { id: 5, title: "Good 4 U", artist: "Olivia Rodrigo" },
//     { id: 6, title: "Montero (Call Me By Your Name)", artist: "Lil Nas X" },
//     { id: 7, title: "Peaches", artist: "Justin Bieber" },
//     { id: 8, title: "Save Your Tears", artist: "The Weeknd" },
//     { id: 9, title: "Kiss Me More", artist: "Doja Cat ft. SZA" },
//     { id: 10, title: "Deja Vu", artist: "Olivia Rodrigo" },
//   ];

//   const handleSearchTermChange = (event) => {
//     setSearchTerm(event.target.value);

//     const keywords = value.toLowerCase().split(" ");

//     const filtered = fakeData.filter((item) => {
//       for (const keyword of keywords) {
//         if (
//           !item.title.toLowerCase().includes(keyword) &&
//           !item.artist.toLowerCase().includes(keyword)
//         ) {
//           return false;
//         }
//       }
//       return true;
//     });

//     setFilteredSuggestions(filtered);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const searchInput = document.querySelector(".search-input");
//       if (searchInput && !searchInput.contains(event.target)) {
//         setFilteredSuggestions([]);
//         setSearchTerm("");
//       }
//     };

//     document.addEventListener("click", handleClickOutside);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <>
//       <div className="py-7 h-[65px] sticky top-0 z-20 bg-[#1d2123] hover:border-gray-100 scroll">
//         <div className="relative hover:border-gray-100 ">
//           <input
//             ref={(node) => {
//               inputRef.current = node;
//             }}
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchTermChange}
//             placeholder="Search artists"
//             className="bg-transparent pl-10 py-1 focus:outline-none text-white hover:border-gray-100"
//           />
//           {searchTerm && filteredSuggestions.length > 0 && (
//             <ul className="absolute left-0 right-0 z-10 bg-gray-800 shadow-md overflow-y-auto max-h-60  w-[30%] rounded-bl-lg rounded-br-lg hide-scrollbar">
//               {filteredSuggestions.map((item) => (
//                 <li
//                   key={item.id}
//                   className="px-4 py-2 cursor-pointer text-white hover:text-[#FACD66]"
//                   onClick={() => handleSuggestionClick(item)}
//                 >
//                   {item.title} - {item.artist}
//                 </li>
//               ))}
//             </ul>
//           )}
//           <div className="absolute left-0 top-0 bottom-0 flex items-center pl-3">
//             <BiSearch className="fill-white/[25%] w-4 h-auto" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

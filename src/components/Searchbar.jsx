import {
  useGetNewMusicQuery,
  useGetPopularMusicQuery,
} from "../redux/services/service";
import { BiSearch } from "react-icons/bi";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleSearchTermChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleDocumentClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const {
    data: newMusicData,
    isFetching: newMusicFetching,
    error: newMusicError,
  } = useGetNewMusicQuery();
  const {
    data: popularMusicData,
    isFetching: popularMusicFetching,
    error: popularMusicError,
  } = useGetPopularMusicQuery();

  useEffect(() => {
    if (newMusicData && popularMusicData) {
      const allData = [...newMusicData, ...popularMusicData];
      const keywords = searchTerm.toLowerCase().split(" ");
      const filtered = allData.filter((item) => {
        for (const keyword of keywords) {
          if (
            !item.title.toLowerCase().includes(keyword) &&
            !item.artist.toLowerCase().includes(keyword)
          ) {
            return false;
          }
        }
        return true;
      });
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [newMusicData, popularMusicData, searchTerm]);

  if (newMusicFetching || popularMusicFetching) {
    return <div>Loading...</div>;
  }
  if (newMusicError || popularMusicError) {
    return (
      <div>Error: {newMusicError?.message || popularMusicError?.message}</div>
    );
  }

  return (
    <div className="relative flex md:justify-start justify-end h-fit w-[60%] md:w-[40%]">
      {/* <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
        />
      </Link> */}

      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Search artists"
        className="bg-transparent md:pl-12 mr-12 md:mr-0 py-1 focus:outline-none text-white w-full md:text-start text-end"
      />
      {showSuggestions && searchTerm && filteredSuggestions.length > 0 && (
        <ul
          id="style-1"
          className="absolute right-3 md:left-3 z-10 bg-[#1A1E1F] top-9 shadow-md overflow-y-auto max-h-60 w-[100%] rounded-lg"
        >
          {filteredSuggestions?.map((song, i) => {
            const handlePlayClick = () => {
              dispatch(setActiveSong({ song, data: song, i }));
              dispatch(playPause(true));
              setShowSuggestions(false);
            };

            return (
              <li
                key={song.id}
                className="px-4 py-4 cursor-pointer text-white hover:text-[#FACD66]"
                onClick={() => handlePlayClick(song, i)}
              >
                {song.title} - {song.artist}
              </li>
            );
          })}
        </ul>
      )}
      <div className="absolute right:right-0 md:left-0 top-0 bottom-0 flex items-center pl-3">
        <BiSearch className="fill-white/[25%] w-5 h-auto" />
      </div>
    </div>
  );
};

export default Searchbar;

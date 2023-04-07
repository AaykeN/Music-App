import Home from "./img/home.svg";
import MusicLibrary from "./img/music-library-2-1.svg";
import Radio from "./img/radio.svg";
import Videos from "./img/videos.svg";
import Profile from "./img/profile.svg";
import Logout from "./img/Logout.svg";

import playAll from "./img/playAll.svg";
import addMusic from "./img/music-square-add.svg";
import like from "./img/Heart.svg";

export const links = [
  { name: "Home", to: "/", icon: Home },
  { name: "My Collection", to: "/collections", icon: MusicLibrary },
  { name: "Radio", to: "/radio", icon: Radio },
  { name: "Music Video", to: "/videos", icon: Videos },
  { name: "Profile", to: "/", icon: Profile },
  { name: "Log Out", to: "/", icon: Logout },
];

export const playListButton = [
  { name: "Play All", icon: playAll },
  { name: "Add to Collection", icon: addMusic },
  { name: "Like", icon: like },
];

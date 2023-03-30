import Home from "./img/home.svg";
import MusicLibrary from "./img/music-library-2-1.svg";
import Radio from "./img/radio.svg";
import Videos from "./img/videos.svg";
import Profile from "./img/profile.svg";
import Logout from "./img/Logout.svg";

export const links = [
  { name: "Discover", to: "/", icon: Home },
  { name: "Around You", to: "/", icon: MusicLibrary },
  { name: "Top Artists", to: "/", icon: Radio },
  { name: "Top Charts", to: "/", icon: Videos },
];

export const linksBottom = [
  { name: "Profile", to: "/", icon: Profile },
  { name: "Log Out", to: "/", icon: Logout },
];

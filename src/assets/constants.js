import { ReactComponent as addMusic } from "./img/music-square-add.svg";
import { ReactComponent as playAll } from "./img/playAll.svg";
import like from "./img/Heart.svg";
import LikeButton from "../components/LikeButton";

import { ReactComponent as Home } from "./img/Home-1.svg";
import { ReactComponent as MusicLibrary } from "./img/music-library-2-1.svg";
import { ReactComponent as Radio } from "./img/radio.svg";
import { ReactComponent as Videos } from "./img/videos.svg";
import { ReactComponent as Profile } from "./img/profile.svg";
import { ReactComponent as Logout } from "./img/Logout.svg";

export const links = [
  { name: "Home", to: "/", icon: Home },
  { name: "My Collection", to: "/collections", icon: MusicLibrary },
  { name: "Radio", to: "/radio", icon: Radio },
  { name: "Music Video", to: "/videos", icon: Videos },
  { name: "Profile", to: "/profile", icon: Profile },
  { name: "Log Out", to: "/logout", icon: Logout },
];

export const playListButton = [
  { name: "Play All", icon: playAll },
  { name: "Add to Collection", icon: addMusic },
  { name: "Like", icon: LikeButton },
];

import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

// Components
import Home from "./pages/Home";
import Radio from "./pages/Radio";
import Videos from "./pages/Videos";
import Playlist from "./pages/Playlist";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import MusicPlayer from "./components/MusicPlayer";
import Collections from "./pages/Collections";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";
import MyCollection from "./components/MyCollection";
import LikedItem from "./components/LikedItem";

function App() {
  return (
    <div className="flex relative">
      <Router>
        <Sidebar />
        <div className="flex flex-col w-full">
          <Topbar />
          <div className="flex-1 h-100vh">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<Collections />}>
                <Route path="" element={<MyCollection />} />
                <Route path="likes" element={<LikedItem />} />
              </Route>
              <Route path="/playlist/:playlistId" element={<Playlist />} />
              <Route path="/radio" element={<Radio />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </Router>

      <div className="fixed h-28 bottom-0 left-0 right-0 flex bg-gradient-to-br from-white/5 to-[#151515] backdrop-blur-2xl z-40">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;

//

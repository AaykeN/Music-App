import "./App.css";
import { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

// Components
import MusicPlayer from "./components/MusicPlayer";
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

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
            </Routes>
          </div>
        </div>
      </Router>

      <div className="fixed h-28 bottom-0 left-0 right-0 flex bg-gradient-to-br from-white/5 to-[#151515] backdrop-blur-2xl z-10">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;

//

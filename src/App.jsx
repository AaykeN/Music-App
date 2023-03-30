import "./App.css";
import { useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

// Components
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Router>
        <Sidebar />
        <div className="flex flex-col w-full">
          <Topbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

//

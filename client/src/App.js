import { React, useState } from "react";
import {
 BrowserRouter as Router,
 Route,
 Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import Ticket from "./pages/Ticket";
import Board from "./pages/Board";
import Sidebar from "./components/Sidebar";

function App() {
 return (
  <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/board" element={<Board />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </Sidebar>
    </Router>
  
 );
}

export default App;

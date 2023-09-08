import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Ticket from "./pages/Ticket";
import Board from "./pages/Board";
import Reports from "./pages/Reports";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Header";
import AddTicketForm from "./pages/AddTicketForms";
import TicketDetailPage from "./pages/TicketDetailPage";

function App() {
    return (
        <>
            {/* <Navbar/> */}
            <Router>
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                </Routes>
                {/* <Sidebar> */}
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/ticket' element={<Ticket />} />
                    <Route path='/ticket/ticketdetailpage' element={<TicketDetailPage />} />
                    <Route path='/ticket/addticketform' element={<AddTicketForm />} />
                    <Route path='/board' element={<Board />} />
                    <Route path='/reports' element={<Reports />} />
                </Routes>
                {/* </Sidebar> */}
            </Router>
            {/* <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/board">
        <Board />
      </Route>
      <Route path="/ticket">
        <Ticket />
      </Route>
      <Route path="/reports">
        <Reports />
      </Route>
    </Switch> */}
        </>
    );
}

export default App;

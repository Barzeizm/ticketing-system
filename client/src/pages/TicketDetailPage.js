import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../App.css";
import TicketDetail from "../components/TicketDetail";

const TicketDetailPage = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='TicketDetailPage'>
                <TicketDetail />
            </div>
        </>
    );
};

export default TicketDetailPage;

import React from "react";
import TicketInfo from "../components/TicketInfo";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../App.css";
import Add from "../components/Add";

const AddTicketForm = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div className='AddTickets'>
                <Add />
            </div>
        </>
    );
};

export default AddTicketForm;

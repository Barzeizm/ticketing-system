import React from "react";
import { Container, Table } from "react-bootstrap";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TicketInfo from "../components/TicketInfo";

const Ticket = () => {
 return (
  <>
    <Header title="Ticket"/>
    <Sidebar/>
   <div className='Ticket'>
        <TicketInfo/>
   </div>
  </>
 );
};

export default Ticket;

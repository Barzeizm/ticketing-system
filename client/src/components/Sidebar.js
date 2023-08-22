import React from "react";
import { Link, NavLink } from "react-router-dom";
import Chart from "react-apexcharts"
import "../App.css";
import { GoHome } from "react-icons/go";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFileEarmarkText } from "react-icons/bs";

const Sidebar = ({ children }) => {
    return (
        <div className='Container-sidebar'>
            <nav className='Sidebar min-vh-100'>
                <div className='Brand'>Admin</div>
                <NavLink to='/'>
                    <GoHome className="icon-sidebar"/>
                    Dashboard
                </NavLink>
                <NavLink to='/ticket'>
                    <AiOutlineUnorderedList className="icon-sidebar"/>
                    Ticket
                </NavLink>
                <NavLink to='/board'>
                    <BsFileEarmarkText className="icon-sidebar"/>
                    Board
                </NavLink>
                <NavLink to='/board'>
                    <BsFileEarmarkText className="icon-sidebar"/>
                    MEE
                </NavLink>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;

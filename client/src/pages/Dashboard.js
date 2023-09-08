import React from "react";
import "../App.css";
import CardData from "../components/CardData";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    return (
        <>
            <Header title='Dashboard' />
            <Sidebar/>
            <div className='Dashboard'>
                <CardData />
                <div className='Table-Dashboard'>
                    <div className='Table-Header-Dashboard'>
                        <h5>Ticket List</h5>
                        <select>
                            <option>Sort By</option>
                            <option>Name</option>
                            <option>Assignee</option>
                            <option>Due</option>
                            <option>Status</option>
                        </select>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Assignee</td>
                                <td>Due</td>
                                <td>Priority</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

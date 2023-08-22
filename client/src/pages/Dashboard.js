import React from "react";
import "../App.css";
import CardData from "../components/CardData";

const Dashboard = () => {
    return (
        <>
            <div className='Dashboard'>
                <div className='Dashboard-header'>
                    <div className='Ellipse-1'></div>
                    <div className='Ellipse-2'></div>
                    <div className='Ellipse-3'></div>
                </div>
                <CardData />
                <div className='Table-Container'>
                    <div className='Table-Header'>
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

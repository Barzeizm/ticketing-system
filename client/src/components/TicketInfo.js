import { React, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Table } from "react-bootstrap";

const TicketInfo = () => {
    const [users, setUser] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getUsers();
    }, []);
    
    const getUsers = async () => {
        const response = await axios.get("http://localhost:4000/api/user");
        console.log(response.data);
        // console.log(setUser(response.data));
    };

    // const products = data.products

    // useEffect(() => {
    //     getUsers();
    // }, []);

    // const getUsers = async () => {
    //     const response = await axios.get("http://localhost:5091/users");
    //     setUser(response.data);
    // };
    return (
        <>
            <div className='Ticketinfo'>
                <div className='Ticketinfo-header'>
                    <div className='Ticketinfo-header-left'>Ticket List</div>
                    <div className='Ticketinfo-header-right'>
                        <NavLink to='/ticket/addticketform'>
                            <button className='btn-ticketinfo'>
                                <AiOutlinePlus className='btn-icon' />
                                <span>Add Ticket</span>
                            </button>
                        </NavLink>
                        <select className='sort-filter'>
                            <option>Sort By</option>
                            <option>Sort By</option>
                            <option>Sort By</option>
                            <option>Sort By</option>
                            <option>Sort By</option>
                        </select>
                    </div>
                </div>
                <div className='ticketinfo-search'>
                    <form>
                        <input onChange={(e) => setSearch(e.target.value)} placeholder='Serach' />
                    </form>
                </div>
                <NavLink>
                    <Table hover>
                        <thead>
                            <tr>
                                <td>
                                    <input type='checkbox' name='SelectAll' />
                                    <label htmlFor='SelectAll'>All</label>
                                </td>
                                <td>No</td>
                                <td>Name</td>
                                <td>Assignee</td>
                                <td>Due</td>
                                <td>Status</td>
                                <td>Priority</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>Pe</td>
                            </tr> */}
                            {/* {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>p</td>
                                    <td></td>
                                </tr>
                            ))} */}
                            {/* {user
                                .filter((user) => {
                                    return search.toLowerCase() === ""
                                        ? user
                                        : user.username.toLowerCase().includes(search);
                                })
                                .map((user, index) => (
                                    <tr key={index}>
                                        <td>
                                            <input type='checkbox' />
                                        </td>
                                        <td>{user.user_id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))} */}
                        </tbody>
                    </Table>
                </NavLink>
            </div>
        </>
    );
};

export default TicketInfo;

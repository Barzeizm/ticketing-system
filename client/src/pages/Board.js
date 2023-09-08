import React from "react";
import { Container, Table } from "react-bootstrap";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Board = () => {
    // const []

    return (
        <>
            <Sidebar />
            <Header title='Board' />
            <div className='Board'>
                <div className='Board-content'>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div className='not-started'>Not Started</div>
                                </th>
                                <th>
                                    <div className='in-progress'>In Progress</div>
                                </th>
                                <th>
                                    <div className='done'>Done</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className='Card-board'>
                                        <div className='title'>Add Fitur</div>
                                        <div className='description'>Tambahkan Fitur Keranjang</div>
                                        <div className='comment'>
                                            <textarea placeholder='Comment'></textarea>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='Card-board'>
                                        <div className='title'>Title</div>
                                        <div className='description'>Desc</div>
                                        <div className='comment'>Comment</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='Card-board'>
                                        <div className='title'>Title</div>
                                        <div className='description'>Desc</div>
                                        <div className='comment'>Comment</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Board;

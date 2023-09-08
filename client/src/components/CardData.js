import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import "../App.css";
import { BiSolidLockOpen, BiSolidLock } from "react-icons/bi";
import { AiOutlineClockCircle, AiOutlineWarning } from "react-icons/ai";
import { IoIosWarning } from "react-icons/io";

const CardData = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    const getUsers = async () => {
        const response = await axios.get("http://localhost:4000/api/user");
        console.log(response.data);
        console.log(setUser(response.data));
    };

    const [options, setObject] = useState({
        chart: {
            id: "line",
        },
        xaxis: {
            type: "datetime",
            categories: [
                "1991-01-01",
                "1992-01-01",
                "1993-01-01",
                "1994-01-01",
                "1995-01-01",
                "1996-01-01",
                "1997-01-01",
                "1998-01-01",
                "1999-01-01",
                "2000-01-01",
                "2001-01-01",
                "2002-01-01",
                "2003-01-01",
                "2004-01-01",
                "2005-01-01",
                "2006-01-01",
                "2007-01-01",
                "2008-01-01",
            ],
        },
        colors: ["#2f58cd"],
        markers: {
            size: 3,
        },
    });
    const [series, setSeries] = useState([
        // {
        //     name: "open",
        //     data: [30, 40, 45, 50, 49, 60, 70, 91, 23, 64, 43, 42, 24, 98, 34, 82, 81, 31],
        // },
        // {
        //     name: "closed",
        //     data: [30, 40, 45, 50, 49, 13, 21, 12, 23, 64, 124, 42, 24, 98, 34, 82, 12, 31],
        // },
        // {
        //     name: "warning",
        //     data: [30, 21, 45, 34, 49, 23, 70, 23, 23, 12, 43, 12, 24, 98, 34, 82, 81, 31],
        // },
        {
            name: [],
            data: [
                [1483228800000, 30],
                [1483315200000, 40],
                [1483401600000, 45],
                // ... and so on
            ],
        },
    ]);
    return (
        <>
            <div className='Card'>
                {/* <div className='OpenTickets'>
                    <div className='OpenData'>
                        <div className='DataIcon'>
                            <BiSolidLockOpen />
                        </div>
                        <div className='Data'></div>
                    </div>
                    <div className='OpenTitle'>Open Tickets</div>
                </div>
                <div className='InprogressTickets'>
                    <div className='InprogressData'>
                        <div className='DataIcon'>
                            <AiOutlineClockCircle />
                        </div>
                        <div className='Data'>21</div>
                    </div>
                    <div className='OpenTitle'>Inprogress Tickets</div>
                </div>
                <div className='ClosedTicket'>
                    <div className='ClosedData'>
                        <div className='DataIcon'>
                            <BiSolidLock />
                        </div>
                        <div className='Data'>25</div>
                    </div>
                    <div className='OpenTitle'>Closed Tickets</div>
                </div>
                <div className='WarningTickets'>
                    <div className='WarningData'>
                        <div className='DataIcon'>
                            <IoIosWarning />
                        </div>
                        <div className='Data'>12</div>
                    </div>
                    <div className='OpenTitle'>Warning Tickets</div>
                </div> */}
                <div className='Chart'>
                    <Chart options={options} series={series} type='line' height='420'></Chart>
                </div>
                <div>
                    <div className='TicketDone'>
                        
                    </div>
                    <div className='TicketDone'></div>
                </div>
            </div>
        </>
    );
};

export default CardData;

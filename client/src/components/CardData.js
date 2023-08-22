import React, { useState } from "react";
import Chart from "react-apexcharts";
import "../App.css";
import { BiSolidLockOpen, BiSolidLock } from "react-icons/bi";
import { AiOutlineClockCircle, AiOutlineWarning } from "react-icons/ai";
import { IoIosWarning } from "react-icons/io";

const CardData = () => {
    const [options, setObject] = useState({
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
        },
        colors: ['#2f58cd']
    });
    const [series, setSeries] = useState([
        {
            name: "open",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 23, 64, 43, 42, 24, 98, 34, 82, 81, 31],
        },
        {
            name: "closed",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 23, 64, 43, 42, 24, 98, 34, 82, 81, 31],
        },
        {
            name: "warning",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 23, 64, 43, 42, 24, 98, 34, 82, 81, 31],
        },
    ]);
    return (
        <>
            <div className='Card'>
                <div className='OpenTickets'>
                    <div className='OpenData'>
                        <div className='DataIcon'>
                            <BiSolidLockOpen />
                        </div>
                        <div className='Data'>13</div>
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
                </div>
                <div className="Chart">

                <Chart options={options} series={series} type='bar' height='420'></Chart>
                </div>
                <div>
                    <div className='TicketDone'></div>
                    <div className='TicketDone'></div>
                </div>
            </div>
        </>
    );
};

export default CardData;

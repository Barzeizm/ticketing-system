import { React, useState } from "react";
import Chart from "react-apexcharts"
const ReportsList = () => {
    const [search, setSearch] = useState("");

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
            <div className='ReportList'>
                <div className='Chart'>
                    <Chart options={options} series={series} type='line' height='420'></Chart>
                </div>
                <div className='TicketSubmission'>
                    <div className="title">Ticket Submission</div>
                    <div>Jumlah Ticket</div>
                </div>
            </div>
        </>
    );
};

export default ReportsList;

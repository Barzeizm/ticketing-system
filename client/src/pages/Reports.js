import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import ReportsList from "../components/ReportsList" 

const Reports = () => {
    return (
        <>
            <Sidebar />
            <Header title='Reports' />
            <div className='Reports'>
                <ReportsList />
            </div>
        </>
    );
};

export default Reports;

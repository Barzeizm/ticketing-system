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
    <CardData/>
   </div>
  </>
 );
};

export default Dashboard;
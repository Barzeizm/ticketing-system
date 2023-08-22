import React from "react";
import "../App.css";
import { BiSolidLockOpen,BiSolidLock } from "react-icons/bi";
import {AiOutlineClockCircle, AiOutlineWarning} from "react-icons/ai"
import {IoIosWarning} from "react-icons/io"

const CardData = () => {
 return (
  <>
   <div className='Card'>
    <div className='OpenTickets'>
     <div className='OpenData'>
      <div className='DataIcon'>
       <BiSolidLockOpen />
      </div>
      <div className='Data'>12</div>
     </div>
     <div className='OpenTitle'>Open Tickets</div>
    </div>
    <div className='InprogressTickets'>
     <div className='InprogressData'>
      <div className='DataIcon'>
       <AiOutlineClockCircle />
      </div>
      <div className='Data'>12</div>
     </div>
     <div className='OpenTitle'>Inprogress Tickets</div>
    </div>
    <div className='ClosedTicket'>
     <div className='ClosedData'>
      <div className='DataIcon'>
       <BiSolidLock />
      </div>
      <div className='Data'>12</div>
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
    <div className='Chart'></div>
    <div>
     <div className='TicketDone'></div>
     <div className='TicketDone'></div>
    </div>
   </div>
  </>
 );
};

export default CardData;

import React from "react";

const TicketDetail = () => {
    return (
        <>
            <div className='TicketDetail'>
                <div className='HeaderTicketDetail'>
                    <div className='HeaderTicketTitle'>
                        <div className='TicketName'>Add Fitur</div>
                        <div className='TicketDetailSection'>
                            <div className='TicketDetailNumber'>#12</div>
                            <div className='TicketDetailDate'>23-09-2023</div>
                        </div>
                    </div>
                    <div className='BtnTicketDetailEdit'>
                        <button>Edit Ticket</button>
                    </div>
                </div>
                <div className='TicketDetailMain'>
                    <div className='TicketDetailDesc'>Tambahkan Fitur Keranjang Dan Juga Story</div>
                </div>
            </div>
        </>
    );
};

export default TicketDetail;

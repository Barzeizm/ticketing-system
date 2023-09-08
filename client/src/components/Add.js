import React from "react";
import "../App.css";

const Add = () => {
    return (
        <>
            <div className='Add'>
                <div className='AddHeader'>
                    <h4>Create Ticket</h4>
                </div>
                <div className='AddForm mb-3'>
                    <form>
                        <div className='m-4'>
                            <label for='PembuatTicket' class='form-label'>
                                Pembuat Ticket
                            </label>
                            <input
                                className='form-control'
                                id='PembuatTicket'
                                aria-label=''
                                placeholder='Ajul'
                                disabled
                                readonly
                            />
                        </div>
                        <div className='m-4'>
                            <label for='InputTicketName' class='form-label'>
                                Nama 
                                nya
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='InputTicketName'
                                placeholder='Masukkan Judul Ticket'
                            />
                        </div>
                        <div class='m-4'>
                            <label for='InputTicketDescription' className='form-label'>
                                Deskripsi Ticket
                            </label>
                            <textarea
                                className='form-control'
                                id='InputTicketDescription'
                                rows='3'
                            ></textarea>
                        </div>
                        <div className='SelectForm'>
                            <div className='AssigneeTicketSelect m-4'>
                                <label for='AssigneeTicketSelect' className='form-label'>
                                    Assignee Ticket Kepada
                                </label>
                                <select
                                    className='form-select'
                                    id='AssigneeTicketSelect'
                                    aria-label=''
                                >
                                    <option selected>Assignee</option>
                                    <option value='1'>One</option>
                                    <option value='2'>Two</option>
                                    <option value='3'>Three</option>
                                </select>
                            </div>
                            <div className='PriorityTicket m-4'>
                                <label for='PriorityTicket' className='form-label'>
                                    Prioritas Ticket
                                </label>
                                <select className='form-select' id='PriorityTicket' aria-label=''>
                                    <option selected>Priority</option>
                                    <option value='1'>One</option>
                                    <option value='2'>Two</option>
                                    <option value='3'>Three</option>
                                </select>
                            </div>
                        </div>
                        <div class='m-4'>
                            <label for='exampleFormControlInput1' class='form-label'>
                                Tenggat Waktu
                            </label>
                            <div className='DueDate'>
                                <input
                                    type='date'
                                    class='form-control'
                                    id='exampleFormControlInput1'
                                    placeholder='name@example.com'
                                />
                                <div className='p-3'>To</div>
                                <input
                                    type='date'
                                    class='form-control'
                                    id='exampleFormControlInput1'
                                    placeholder='name@example.com'
                                />
                            </div>
                        </div>
                        <div className='m-4 AddTicketSection'>
                            <submit className='AddTicketButton'>
                                <div className='SubmitSection'>
                                    <button className='btn btn-primary'>Submit</button>
                                </div>
                                <div className='CancelSection'>
                                    <button className='btn btn-secondary'>Cancel</button>
                                </div>
                            </submit>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Add;

import React from "react";
import { Container, Table } from "react-bootstrap";

const Ticket = () => {
 return (
  <div className=''>
   <div className='Ticket'>
    <div className='Section'>
        <div className="Section-header"></div>
     <Table striped bordered hover size='sm' variant='dark'>
      <thead className='rounded-10 text-center'>
       <tr>
        <th>Name</th>
        <th>Assignee</th>
        <th>Due</th>
        <th>Priority</th>
        <th>Status</th>
       </tr>
      </thead>
      <tbody className="text-center">
       <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
       </tr>
      </tbody>
     </Table>
    </div>
   </div>
  </div>
 );
};

export default Ticket;

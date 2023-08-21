import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { GoHome } from "react-icons/go";
import {AiOutlineUnorderedList} from "react-icons/ai"
import {BsFileEarmarkText} from "react-icons/bs"

const Sidebar = ({ children }) => {
 const menuItem = [
  {
   path: "/",
   nama: "Dashboard",
   icon: <GoHome />,
  },
  {
   path: "/ticket",
   nama: "Ticket",
   icon: <AiOutlineUnorderedList />
  },
  {
   path: "/board",
   nama: "Board",
   icon: <BsFileEarmarkText/>
  },
 ];
 return (
  <div className='Container-sidebar'>
   <div className='Sidebar min-vh-100'>
    <div className='Brand'>Admin</div>
    {menuItem.map((item, index) => (
     <NavLink
      to={item.path}
      key={index}
      className='mt-5 text-decoration-none'
      activeclassName='active'
     >
      <div className='Link'>
       <div className='Icon'>{item.icon}</div>
       <div className=''>{item.nama}</div>
      </div>
     </NavLink>
    ))}
   </div>
   <main>{children}</main>
  </div>
 );
};

export default Sidebar;

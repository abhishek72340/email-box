import './SideNav.css';
import {NavLink } from 'react-router-dom'
import { BsInboxFill } from 'react-icons/bs';
import { RiSpam2Fill } from 'react-icons/ri';
import { BsTrashFill } from 'react-icons/bs';

export default function SideNav() {

  const activeStyle =({isActive})=> ({
    color: isActive?'red':'black'
  });
  return (
    <>
      <div id='nav-main'>
        <nav id='navbar'>
          <NavLink to='trash' style={activeStyle}><BsTrashFill /> Trash</NavLink>
          <NavLink to='spam' style={activeStyle}><RiSpam2Fill /> Spam</NavLink>
          <NavLink to='/' style={activeStyle}>  <BsInboxFill /> Inbox</NavLink>
        </nav>
      
      </div>
    </>
  )
}
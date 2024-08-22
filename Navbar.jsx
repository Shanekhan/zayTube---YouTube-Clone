import React from 'react'
import './Navbar.css'
import menu_icon from '../assets/menu.png'
import logo from '../assets/logo.png'
import search_icon from '../assets/search.png'
import upload_icon from '../assets/upload.png'
import notification_icon from '../assets/notification.png'
import profile_icon from '../assets/profile.png'

const Navbar = ({ setSidebar }) => {
  return (
    <div>
      <nav className='flex-div'>
        {/* Left section of the navbar */}
        <div className='nav-left flex-div'>
          {/* Menu icon to toggle sidebar */}
          <img
            className='menu-icon'
            onClick={() => setSidebar(prev => !prev)}
            src={menu_icon}
            alt="Menu Icon"
          />
          {/* Logo of the site */}
          <img className='logo' src={logo} alt='Logo'/>
          {/* Title of the site */}
          <h2>zayTube</h2>
        </div>
        
        {/* Middle section of the navbar */}
        <div className='nav-middle flex-div'>
          {/* Search box for searching content */}
          <div className='search-box flex-div'>
            <input type='text' placeholder='Search'/>
            <img src={search_icon} alt='Search Icon'/>
          </div>
        </div>
        
        {/* Right section of the navbar */}
        <div className='nav-right flex-div'>
          {/* Icon for uploading content */}
          <img src={upload_icon} alt='Upload Icon'/>
          {/* Icon for notifications */}
          <img src={notification_icon} alt='Notification Icon'/>
          {/* User profile icon */}
          <img src={profile_icon} className='user-icon' alt='Profile Icon'/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

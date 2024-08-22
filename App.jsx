import React, { useState } from "react"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/sidebar/Sidebar"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Video from "./Pages/Video/Video"
import Playlist from "./Components/playlist/Playlist"

const App = () => {
  // State to manage sidebar visibility
  const [sidebar, setSidebar] = useState(true)
  
  // Hook to get the current location
  const location = useLocation()
  
  // Determine if the current page is a playlist page
  const isPlaylistPage = location.pathname.startsWith('/playlist')

  return (
    <div>
      {/* Navbar component with sidebar toggle functionality */}
      <Navbar setSidebar={setSidebar} />
      
      {/* Conditionally render Sidebar based on current page */}
      {!isPlaylistPage && <Sidebar sidebar={sidebar} />}
      
      {/* Define routes for different pages */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home sidebar={sidebar} />} />
        
        {/* Video page route with dynamic parameters */}
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        
        {/* Playlist page route with dynamic playlistId */}
        <Route path="/playlist/:playlistId" element={<Playlist />} /> {/* Route for Playlist */}
      </Routes>
    </div>
  )
}

export default App

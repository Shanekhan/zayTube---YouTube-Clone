import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/playVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo/>
      <Recommended/>
    </div>
  )
}

export default Video

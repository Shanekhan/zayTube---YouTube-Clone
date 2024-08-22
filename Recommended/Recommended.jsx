import React from 'react' // Importing React for component creation
import './Recommended.css' // Importing custom CSS for the Recommended component
import nail1 from '../../assets/nail1.jpg' // Importing images for the recommended videos
import nail2 from '../../assets/nail2.jpg'
import nail3 from '../../assets/nail3.jpg'
import nail4 from '../../assets/nail4.jpg'
import nail5 from '../../assets/nail5.jpg'
import nail6 from '../../assets/nail6.jpg'
import nail7 from '../../assets/nail7.jpg'
import nail8 from '../../assets/nail8.jpg'

const Recommended = () => {
  return (
    <div className='recommended'>
      {/* Rendering a list of recommended videos */}
      <div className='side-video-list'>
        <img src={nail1} alt="Video thumbnail"/> {/* Video thumbnail */}
        <div className='vid-info'>
          <h4>Best Channel that helps you to learn code</h4> {/* Video title */}
          <p>zayCode</p> {/* Channel name */}
          <p>199k Views</p> {/* View count */}
        </div>
      </div>

      {/* Repeating the structure for additional recommended videos */}
      <div className='side-video-list'>
        <img src={nail2} alt="Video thumbnail"/>
        <div className='vid-info'>
          <h4>Best Channel that helps you to learn code</h4>
          <p>zayCode</p>
          <p>199k Views</p>
        </div>
      </div>

      <div className='side-video-list'>
        <img src={nail3} alt="Video thumbnail"/>
        <div className='vid-info'>
          <h4>Best Channel that helps you to learn code</h4>
          <p>zayCode</p>
          <p>199k Views</p>
        </div>
      </div>

      <div className='side-video-list'>
        <img src={nail4} alt="Video thumbnail"/>
        <div className='vid-info'>
          <h4>Best Channel that helps you to learn code</h4>
          <p>zayCode</p>
          <p>199k Views</p>
        </div>
      </div>

      <div className='side-video-list'>
        <img src={nail5} alt="Video thumbnail"/>
        <div className='vid-info'>
          <h4>Best Channel that helps you to learn code</h4>
          <p>zayCode</p>
          <p>199k Views</p>
        </div>
      </div>

      <div className='side-video-list'>
        <img src={nail6} alt="Video thumbnail"/>
        <div className='vid-info'>
          <h4>Best Channel that helps you to learn code</h4>
          <p>zayCode</p>
          <p>199k Views</p>
        </div>
      </div>

      <div className='side-video-list'>
        <img src={nail7} alt="Video thumbnail"/>
        <div className='vid-info'>
          <h4>Best Channel that helps you to learn code</h4>
          <p>zayCode</p>
          <p>199k Views</p>
        </div>
      </div>

      <div className='side-video-list'>
        <img src={nail8} alt="Video thumbnail"/>
        <div className='vid-info'>
          <h4>Best Channel that helps you to learn code</h4>
          <p>zayCode</p>
          <p>199k Views</p>
        </div>
      </div>
      
    </div>
  )
}

export default Recommended // Exporting the Recommended component to be used elsewhere

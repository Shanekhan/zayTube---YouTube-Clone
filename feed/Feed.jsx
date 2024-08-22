import React from 'react' // Importing React to create components
import './Feed.css' // Importing CSS file for styling the Feed component
import { Link } from 'react-router-dom' // Importing Link from react-router-dom for navigation

// Importing images that will be used in the component
import nail1 from '../../assets/nail1.jpg'
import nail2 from '../../assets/nail2.jpg'
import nail3 from '../../assets/nail3.jpg'
import nail4 from '../../assets/nail4.jpg'
import nail5 from '../../assets/nail5.jpg'
import nail6 from '../../assets/nail6.jpg'
import nail7 from '../../assets/nail7.jpg'
import nail8 from '../../assets/nail8.jpg'

const Feed = () => {
  return (
    <div className="feed">
      {/* Link component allows navigation to the video page with specific ID */}
      <Link to={`/Video/20/4521`} className='card'>
        <img src={nail1} alt=""/> {/* Displaying the first image */}
        <h2>Best channel to learn code that help you</h2> {/* Video title */}
        <h3>zayCode</h3> {/* Channel name */}
        <p>15k views &bull; 2 days ago</p> {/* Video views and upload time */}
      </Link>

      {/* Repeating the card layout for other videos (without navigation) */}
      <div className='card'>
        <img src={nail2} alt=""/>
        <h2>Best channel to learn code that help you</h2>
        <h3>zayCode</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>

      <div className='card'>
        <img src={nail3} alt=""/>
        <h2>Best channel to learn code that help you</h2>
        <h3>zayCode</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>

      <div className='card'>
        <img src={nail4} alt=""/>
        <h2>Best channel to learn code that help you</h2>
        <h3>zayCode</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>

      <div className='card'>
        <img src={nail5} alt=""/>
        <h2>Best channel to learn code that help you</h2>
        <h3>zayCode</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>

      <div className='card'>
        <img src={nail6} alt=""/>
        <h2>Best channel to learn code that help you</h2>
        <h3>zayCode</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>

      <div className='card'>
        <img src={nail7} alt=""/>
        <h2>Best channel to learn code that help you</h2>
        <h3>zayCode</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>

      <div className='card'>
        <img src={nail8} alt=""/>
        <h2>Best channel to learn code that help you</h2>
        <h3>zayCode</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
    </div>
  )
}

export default Feed // Exporting the Feed component to be used in other parts of the application

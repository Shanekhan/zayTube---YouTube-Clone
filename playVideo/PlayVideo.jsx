import React from 'react' // Importing React for component creation
import './PlayVideo.css' // Importing custom CSS for the PlayVideo component
import video1 from '../../assets/video1.mp4' // Importing video file to be played
import like from '../../assets/like.svg' // Importing like icon
import dislike from '../../assets/dislike.svg' // Importing dislike icon
import share from '../../assets/share.svg' // Importing share icon
import save from '../../assets/save.svg' // Importing save icon
import profil from '../../assets/profil.jpeg' // Importing profile image for the publisher
import profile from '../../assets/profile.png' // Importing profile image for comments

const PlayVideo = () => {
  return (
    <div className='play-video'>
      {/* Video player with controls, auto-play, and muted */}
      <video src={video1} controls autoPlay muted></video>
      
      {/* Video title */}
      <h3>Best YouTube channel to learn code</h3>
      
      {/* Video information section with views, likes, dislikes, etc. */}
      <div className='play-video-info'>
        <p>1123 Views &bull; 2 days ago</p>
        <div>
          <span><img src={like} alt="Like" />111</span> {/* Like icon with count */}
          <span><img src={dislike} alt="Dislike" />2</span> {/* Dislike icon with count */}
          <span><img src={share} alt="Share" />Share</span> {/* Share icon */}
          <span><img src={save} alt="Save" />Save</span> {/* Save icon */}
        </div>
      </div>
      <hr />

      {/* Publisher information section with subscribe button */}
      <div className='publisher'>
        <img src={profil} alt="Profile" /> {/* Publisher's profile image */}
        <div>
          <p>zayCode</p> {/* Publisher's name */}
          <span>1M Subscribers</span> {/* Subscriber count */}
          <button>Subscribe</button> {/* Subscribe button */}
        </div>
      </div>

      {/* Video description section */}
      <div className='vid-description'>
        <p>Channel that makes learning easy</p> {/* Description line 1 */}
        <p>Subscribe to zayCode to watch more</p> {/* Description line 2 */}
        <hr />
        <h4>110 Comments</h4> {/* Comments section title */}

        {/* Comment section: rendering each comment */}
        <div className='comments'>
          <img src={profile} alt='Profile' /> {/* Commenter's profile image */}
          <div>
            <h3>Joseph Mykle</h3> {/* Commenter's name */}
            <p>A great channel to learn coding</p> {/* Comment text */}
            <div className='comment-action'>
              <img src={like} alt='Like' /> {/* Like icon for the comment */}
              <span>130</span> {/* Like count for the comment */}
              <img src={dislike} alt='Dislike' /> {/* Dislike icon for the comment */}
            </div>
          </div>
        </div>

        {/* Additional comments can be repeated as needed */}
        <div className='comments'>
          <img src={profile} alt='Profile' />
          <div>
            <h3>Joseph Mykle</h3>
            <p>A great channel to learn coding</p>
            <div className='comment-action'>
              <img src={like} alt='Like' />
              <span>130</span>
              <img src={dislike} alt='Dislike' />
            </div>
          </div>
        </div>

        {/* Repeated comment structure */}
        <div className='comments'>
          <img src={profile} alt='Profile' />
          <div>
            <h3>Joseph Mykle</h3>
            <p>A great channel to learn coding</p>
            <div className='comment-action'>
              <img src={like} alt='Like' />
              <span>130</span>
              <img src={dislike} alt='Dislike' />
            </div>
          </div>
        </div>
        
        {/* Repeatable comment block */}
        <div className='comments'>
          <img src={profile} alt='Profile' />
          <div>
            <h3>Joseph Mykle</h3>
            <p>A great channel to learn coding</p>
            <div className='comment-action'>
              <img src={like} alt='Like' />
              <span>130</span>
              <img src={dislike} alt='Dislike' />
            </div>
          </div>
        </div>
        
        {/* Last repeated comment block */}
        <div className='comments'>
          <img src={profile} alt='Profile' />
          <div>
            <h3>Joseph Mykle</h3>
            <p>A great channel to learn coding</p>
            <div className='comment-action'>
              <img src={like} alt='Like' />
              <span>130</span>
              <img src={dislike} alt='Dislike' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo // Exporting the PlayVideo component to be used elsewhere

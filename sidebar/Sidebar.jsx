import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Sidebar.css'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import javascript from '../../assets/js.svg'
import bootstrap from '../../assets/bootstrap.svg'
import react from '../../assets/react.svg'
import harry from '../../assets/harry.jpg'
import apnacollege from '../../assets/apnacollege.jpg'
import chai from '../../assets/chai.jpg'
import brocode from '../../assets/brocode.jpg'

const Sidebar = ({ setCategory, sidebar }) => {
  const navigate = useNavigate()

  // Define URLs for YouTube channels
  const channelUrls = {
    harry: 'https://www.youtube.com/@CodeWithHarry',
    apnacollege: 'https://www.youtube.com/@ApnaCollegeOfficial',
    chai: 'https://www.youtube.com/@chaiaurcode',
    brocode: 'https://www.youtube.com/@BroCodez'
  }

  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className='shortcut-links'>
        <div className='side-link' onClick={() => navigate('/playlist/PLu71SKxNbfoDBNF5s-WH6aLbthSEIMhMI')}>
          <img src={html} alt="" /><p>HTML</p>
        </div>
        <div className='side-link' onClick={() => navigate('/playlist/PLjpp5kBQLNTSFXXi-bfskBXG178FGkftU')}>
          <img src={css} alt="" /><p>CSS3</p>
        </div>
        <div className='side-link' onClick={() => navigate('/playlist/PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37')}>
          <img src={javascript} alt="" /><p>JavaScript</p>
        </div>
        <div className='side-link' onClick={() => navigate('/playlist/PLvV8y9QhNiW_xqiy91NdYYBNb29rQb83T')}>
          <img src={bootstrap} alt="" /><p>Bootstrap</p>
        </div>
        <div className='side-link' onClick={() => navigate('/playlist/PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige')}>
          <img src={react} alt="" /><p>React.js</p>
        </div>
        <hr />
      </div>
      <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className='side-link' onClick={() => window.open(channelUrls.harry, '_blank')}>
          <img src={harry} alt="" /><p>Code with Harry</p>
        </div>
        <div className='side-link' onClick={() => window.open(channelUrls.apnacollege, '_blank')}>
          <img src={apnacollege} alt="" /><p>Apna College</p>
        </div>
        <div className='side-link' onClick={() => window.open(channelUrls.chai, '_blank')}>
          <img src={chai} alt="" /><p>Chai Aur Code</p>
        </div>
        <div className='side-link' onClick={() => window.open(channelUrls.brocode, '_blank')}>
          <img src={brocode} alt="" /><p>Bro Code</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

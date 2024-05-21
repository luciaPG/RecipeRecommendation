/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */
import './HomeScreen.css';
import Video from '/src/assets/mainScreenVideo.mp4'
import { Button } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted max-width="100%" height="auto"></video>
      </div>
      <div className='sectionText'>
        <h1 className='text'>Recipe Recommendation</h1>
        <h3 className='substitle'>Find the perfect recipe for any occasion</h3>
        <div className='buttons'>
        <button className='btn' onClick={()=> navigate('/questionary')}>Start</button>
        </div>
      </div>

    </div>
  );
};

export default HomeScreen;

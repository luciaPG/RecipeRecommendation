/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */
import './HomeScreen.css';
import Video from '/src/assets/mainScreenVideo.mp4'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const apiKey = 'GkhP0QwCUZjNSCT2qq4pAQSqodp6iVGB';


const HomeScreen = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'http://35.173.1.174/users',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey
          }
        });

  
          setUser(response.data.connection_token);
       
      } catch (error) {
        console.error(error);
      }
    };

    if (user === null) {
      postData();
    }
  }, [user]);


  return (
    
    <div className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted max-width="100%" height="auto"></video>
   
      </div>
      <div className='sectionText'>
        <div className='title'>
          <h1 className='text'>AYURVEDA BASED</h1>
          <h1 className='text'>RECIPE RECOMMENDATION</h1>
          <h3 className='subtitle'>Find the perfect recipe for any occasion</h3>
          <button className='btn' onClick={() => navigate('/questionary',{state:user})}>Start</button>
          {console.log(user)}
        </div>
      </div>

    </div>
  );
};

export default HomeScreen;

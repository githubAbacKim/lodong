import React, { useState ,useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import FooterSection from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Project from '../components/Projects/project';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import TeamSection from '../components/TeamSection';
import Animation from '../components/Animtion/Animation';
import UpperFooter from '../components/UpperFooter';
import introvde from '.././images/intro/intro.mp4';

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `abf6a20074c9e8ceda7eff4ed70de0ba`

const Home = () => {

  
 

  const [latitude , setLatitude] = useState('');
  const [longitude , setLongitude] = useState('');
  const [responseData, setResponseData] = useState('');
  const [loading, setLoading] = useState(false);

 /*  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })

    let finalAPIEndPoint =`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`
    
    axios.get(finalAPIEndPoint)
    .then((response) => {
      console.log(response.data);
      setResponseData(response.data);
    })

  
    console.log(latitude);
    console.log(longitude);
    
  },[]) */

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false);
      }, 2000);
  },[]);
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.querySelector('#root');

    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)

    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })

    let finalAPIEndPoint =`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`
    
    axios.get(finalAPIEndPoint)
    .then((response) => {
      console.log(response.data);
      setResponseData(response.data);
    })

  
    console.log(latitude);
    console.log(longitude);
  }, []);
  
  return (
    <>
    {
      loading ?
      <div className="video-container">
        <video muted  autoPlay > 
          <source type="video/webm" src={introvde} />
        </video>  
      </div>
      :
      <div>
      
      <Helmet>
        <title>HOME</title>
  
        <meta name='description' content={responseData.name}/>
        <link rel='canonical' href='/'/>
      </Helmet>
       
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <Project/>
        <Animation/>
        <TeamSection/>
        <UpperFooter/>
        <FooterSection/>
        
      </div>
    }
    </>
  );
};

export default Home;

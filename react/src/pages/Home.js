import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CarouselContent from '../components/Carousel';
import FooterSection from '../components/Footer';
import HeroSection from '../components/HeroSection';
import LodongTeamSection from '../components/LodongTeam';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import TeamSection from '../components/TeamSection';
import UpperFooter from '../components/UpperFooter';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Helmet>
      <title>HOME</title>
      <meta name='description' content='lodong home page'/>
      <link rel='canonical' href='/'/>
    </Helmet>
     
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <LodongTeamSection/>
      <CarouselContent/> 
      <TeamSection/>
      <UpperFooter/>
      <FooterSection/>
    </>
  );
};

export default Home;

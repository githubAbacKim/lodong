import React, { useState } from 'react';
import CarouselContent from '../components/Carousel';
import FooterSection from '../components/Footer';
import HeroSection from '../components/HeroSection';
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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <CarouselContent/> 
      <TeamSection/>
      <UpperFooter/>
      <FooterSection/>
    </>
  );
};

export default Home;

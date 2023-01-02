import React, { useState } from 'react';
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
      <TeamSection/>
      <UpperFooter/>
      <FooterSection/>
    </>
  );
};

export default Home;

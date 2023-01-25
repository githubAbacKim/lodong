import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FooterSection from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectD from '../components/ProjectD';
import Sidebar from '../components/Sidebar';


const FourthProject = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <Helmet>
        <title>PROJECT D</title>
        <meta name='description' content='lodong PROJECTS'/>
        <link rel='canonical' href='/'/>
      </Helmet>
       
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <ProjectD/>
        <FooterSection/>
      </>
  )
}

export default FourthProject;
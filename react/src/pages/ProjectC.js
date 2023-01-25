import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FooterSection from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectC from '../components/ProjectC';
import Sidebar from '../components/Sidebar';

const Thirdproject = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
      <Helmet>
        <title>PROJECT C</title>
        <meta name='description' content='lodong PROJECTS'/>
        <link rel='canonical' href='/'/>
      </Helmet>
       
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <ProjectC/>
        <FooterSection/>
      </>
    );
}

export default Thirdproject
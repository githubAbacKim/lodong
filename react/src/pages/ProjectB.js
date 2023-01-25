import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FooterSection from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectB from '../components/ProjectB';
import Sidebar from '../components/Sidebar';

const SecondProject = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <>
      <Helmet>
        <title>PROJECT B</title>
        <meta name='description' content='lodong PROJECTS'/>
        <link rel='canonical' href='/'/>
      </Helmet>
       
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <ProjectB/>
        <FooterSection/>
      </>
    );
}

export default SecondProject
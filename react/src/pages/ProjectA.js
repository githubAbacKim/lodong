import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FooterSection from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectA from '../components/PROJECTA';
import Sidebar from '../components/Sidebar';

const FirstProject = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Helmet>
      <title>PROJECT A</title>
      <meta name='description' content='lodong PROJECTS'/>
      <link rel='canonical' href='/'/>
    </Helmet>
     
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
        <ProjectA/>
      <FooterSection/>
    </>
  );
};

export default FirstProject;

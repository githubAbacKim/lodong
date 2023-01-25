import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import ServicesContentSection from '../components/ServicesContent';
import Sidebar from '../components/Sidebar';

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
     <Helmet>
      <title>SERVICES</title>
      <meta name='description' content='lodong Services page'/>
      <link rel='canonical' href='/Services'/>
    </Helmet>
    
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ServicesContentSection/>
    </>
  );
};

export default Services;

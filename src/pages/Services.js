import React, { useState } from 'react';
import FooterSection from '../components/Footer';
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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ServicesContentSection/>
      <FooterSection/>
    </>
  );
};

export default Services;

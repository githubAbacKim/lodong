import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InquireSection from '../components/Inquire';
import FooterSection from '../components/Footer';
import Inprogress from '../components/Inprogress';


const Inquire = () => {
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
        <InquireSection/>
     {/*    <Inprogress/> */}
        <FooterSection/>
      </>
    );
}

export default Inquire
import React,{useEffect} from 'react'
import AOS  from 'aos';
import 'aos/dist/aos.css'

import {
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
  } from './inprogressELements';

const Inprogress = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
      }, []);
  return (
    <>
        <HeroContainer>
          <HeroContent>
            <div data-aos="fade-up">
              
            <HeroH1>INPROGRESS</HeroH1>
              <HeroP>
              THIS PAGE IS CURRENTLY UPDATING CONTENT
              </HeroP>
                
            </div>
          </HeroContent>
        </HeroContainer>
    </>
  )
}

export default Inprogress;
import React,{useEffect} from 'react'
import AOS  from 'aos';
import 'aos/dist/aos.css'


import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
} from './HereElements';

const HeroSection = () => {
  
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
      <>
        <HeroContainer>
          <HeroContent>
            <div data-aos="fade-up">
              
            <HeroH1>실패없는 개발</HeroH1>
              <HeroP>
                불가능, 그것은 사실이 아닙니다. <br/>
                우리에겐 하나의 의견일 뿐입니다.
              </HeroP>
                
            </div>
          </HeroContent>
        </HeroContainer>
    </>
  );
};

export default HeroSection;

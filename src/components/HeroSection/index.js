import React from 'react';
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroH4,
  HeroBgOverlay,
} from './HereElements';
import bgOpacity from '../../images/bgOpacity.svg';
import bgpersonImage from '../../images/bgpersonImage.svg';

const HeroSection = () => {
  return (
    <>
    <HeroContainer /* style={{ backgroundImage: `url(${bgpersonImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
                backgroundSize: 'cover'}} */>
   {/*    <HeroBg>
        <img src={bgOpacity} width="1100px" height="1000px" alt='prop' />
      </HeroBg>
      <HeroBgOverlay>
        <img src={bgpersonImage} width="900px" height="1000px" alt='prop' />
      </HeroBgOverlay> */}

      <HeroContent>
        <HeroH1>실패없는 개발</HeroH1>
        <HeroP>모든 혁신은 불가능 위에 쓰여졌다.</HeroP>
        <HeroP>
          수만년전, 그 어떤 인류도 사냥감을 조리 할 수 있다고 생각하지
          못했습니다. <br />
          모든 가능성을 열어 두었던 한 창의적인 인류가 불을 발견 하기 전까지
          <br />
          모든 유럽인들은 대서양을 가로질러 인도를 찾는것은 불가능이라고
          말했습니다.
        </HeroP>

        <HeroH4>
          21세기엔 <b>로동</b>이라는 이름으로 완성합니다.
          <br />
          <b> 더 따듯하고 나은 세상을 위해.</b>
        </HeroH4>
      </HeroContent>
    </HeroContainer>
 </>
  );
};

export default HeroSection;

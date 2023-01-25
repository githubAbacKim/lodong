import styled from 'styled-components';
import bg from '../../images/bg.png';

export const HeroContainer = styled.div`
  display: flex;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
  z-index: 1;
  min-height: 80vh;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 850px;
  width: 50%;
  height: 100%;

  @media (max-width: 575.98px) {
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 10px;
    width: 50%;
    height: 100%;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 170px;
    width: 50%;
    height: 100%;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 370px;
    width: 50%;
    height: 100%;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 450px;
    width: 50%;
    height: 100%;
  }

  @media (min-width: 1200px) and (min-width: 2800px) {
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 850px;
    width: 50%;
    height: 100%;
  }
  @media (min-width: 1200px) and (min-width: 2800px) {
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 850px;
    width: 50%;
    height: 100%;
  }
`;

export const HeroBgOverlay = styled.div`
  position: absolute;
  top: 150px;
  right: 0;
  bottom: 0;
  left: 730px;
  width: 100%;
  overflow: hidden;
  height: 85%;

  @media (max-width: 575.98px) {
    position: absolute;
    top: 220px;
    right: 0;
    bottom: 0;
    left: 10px;
    width: 100%;
    overflow: hidden;
    height: 100%;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    position: absolute;
    top: 150px;
    right: 0;
    bottom: 0;
    left: 150px;
    width: 100%;
    overflow: hidden;
    height: 100%;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    position: absolute;
    top: 150px;
    right: 0;
    bottom: 0;
    left: 280px;
    width: 100%;
    overflow: hidden;
    height: 100%;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    position: absolute;
    top: 150px;
    right: 0;
    bottom: 0;
    left: 430px;
    width: 100%;
    overflow: hidden;
    height: 100%;
  }

  @media (min-width: 1200px) and (min-width: 2800px) {
    position: absolute;
    top: 150px;
    right: 0;
    bottom: 0;
    left: 730px;
    width: 100%;
    overflow: hidden;
    height: 100%;
  }
`;

export const HeroContent = styled.div`
  z-indez: 3;
  flex-direction: column;
  align-items: flex;

  @media (max-width: 575.98px) {
   
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
   
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
   
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
   
  }

  @media (min-width: 1200px) and (min-width: 2800px) {
    z-indez: 3;
    max-width: 1200px;
    position: absolute;
    top: 411px;
    left: 30px;
    padding: 2px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeroH1 = styled.h1`
  color: #EC0009;
  text-align: center;
  font-style: normal;
  font-family: 'Leferi Base Type';
  font-weight: 700;
  font-size: 3.5em;

`;

export const HeroH4 = styled.h4`
  color: #000000;
  font-size: 2vh;
  font-style: normal;
`;

export const HeroP = styled.p`
  color: #858585;
  text-align: center;
  font-size: 1.8vh;
  margin-bottom: 20px;
  margin-top: 4px;
  font-style: normal;
  font-weight: 400;
 
`;

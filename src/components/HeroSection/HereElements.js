import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  min-height: 100vh;
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
  max-width: 1200px;
  position: absolute;
  top: 411px;
  left: 490px;
  padding: 2px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 575.98px) {
    z-indez: 3;
    max-width: 1200px;
    position: absolute;
    top: 111px;
    left: 60px;
    padding: 2px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    z-indez: 3;
    max-width: 1200px;
    position: absolute;
    top: 111px;
    left: 60px;
    padding: 2px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    z-indez: 3;
    max-width: 1200px;
    position: absolute;
    top: 111px;
    left: 60px;
    padding: 2px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    z-indez: 3;
    max-width: 1200px;
    position: absolute;
    top: 311px;
    left: 20px;
    padding: 2px 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
  color: #000000;
  font-size: 6vh;
  text-align: center;
  font-style: normal;

`;

export const HeroH4 = styled.h4`
  color: #000000;
  font-size: 2vh;
  font-style: normal;
`;

export const HeroP = styled.p`
  color: #000000;
  font-size: 1.8vh;
  margin-bottom: 20px;
  margin-top: 4px;
  max-width: 600px;

 
`;

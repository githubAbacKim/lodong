import styled from 'styled-components';

export const HeroContainer = styled.div`
  display: flex;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  left: 750px;
  width: 50%;
  height: 100%;
  overflow: hidden;
`;

export const HeroBgOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 750px;
  width: 50%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-indez: 3;
  max-width: 1200px;
  position: absolute;
  top: 311px;
  left: 360px;
  padding: 2px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    top: 200px;
    left: 0px;
    z-indez: 3;
    max-width: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    z-indez: 3;
    max-width: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroH1 = styled.h1`
  color: #000000;
  font-size: 67px;
  text-align: center;
  font-style: normal;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroH4 = styled.h4`
  color: #000000;
  font-size: 28px;
  font-style: normal;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  color: #000000;
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 4px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
`;

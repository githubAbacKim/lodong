import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.image`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a24;
`;

export const HeroContent = styled.div`
  z-indez: 3;
  max-width: 1200px;
  position: absolute;
  top: 311px;
  left: 150px;
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
  color: #fff;
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
  color: #fff;
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
  color: #fff;
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

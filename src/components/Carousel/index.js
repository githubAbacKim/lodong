import React,{useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import phonebg from '../../images/phonebg.png';
import doneEditBg from '../../images/doneEditBg.svg';
import { CarouselContentDIv,CarouselH3,CarouselH2 ,CarouselText,CarouselImage} from './CarouselElements';


const CarouselContent = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  
  const carouselItem = {
    backgroud:'#FFFFFF'
  };
  return (
    <CarouselContentDIv>
        <Carousel style={carouselItem} activeIndex={index} onSelect={handleSelect} variant="dark">
            <Carousel.Item >
                
            <CarouselImage>
                    <img src={doneEditBg} style={carouselItem}  width="1500vh" /* height="700px" */ alt='prop' />
                    </CarouselImage>
                <Carousel.Caption>
                <CarouselText>
                    <CarouselH3><b>간편</b>하고 <b>편리</b>한 <br/><b>시공파트너</b></CarouselH3>
                    <CarouselH2><b>Keflavik</b></CarouselH2>
                </CarouselText>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item >
                <CarouselImage>
                    <img src={doneEditBg} style={carouselItem}  width="1500vh" /* height="700px" */ alt='prop' />
                </CarouselImage>
                <Carousel.Caption>
                    <CarouselText>
                        <CarouselH3><b>Keflavik</b>Keflavik <b>Keflavik</b>Keflavik <br/><b>Keflavik</b></CarouselH3>
                        <CarouselH2><b>Keflavik</b></CarouselH2>
                    </CarouselText>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </CarouselContentDIv>

       

  )
}

export default CarouselContent
import React,{useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import  picA  from '../../images/carouselImages/picA.svg'
import { CarouselContentDIv  } from './CarouselElements';


const CarouselContent = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imageShadow = {
    borderRadius: '1.4% 1.4% 1.4% 1.4%',
    boxShadow: '2px 4px 13px rgba(0, 0, 0, 0.25)',
  };

  return (
    <CarouselContentDIv>
        <Carousel  activeIndex={index} onSelect={handleSelect}  variant="light">

            <Carousel.Item  >    
            <div className='row d-flex'>
                 <div className='col text-center'>
              {/*    <img src={picA}  style={imageShadow}  width="1700vh" height="700px" alt='prop' /> */}
                 </div>
            </div>
            </Carousel.Item>    
        
            <Carousel.Item  >    
            <div className='row d-flex'>
                 <div className='col text-center'>
                {/*  <img src={picA}  style={imageShadow}  width="1700vh" height="700px" alt='prop' /> */}
                 </div>
            </div>
            </Carousel.Item>  
            <Carousel.Item  >    
            <div className='row d-flex'>
                 <div className='col text-center'>
               {/*   <img src={picA}  style={imageShadow}  width="1700vh" height="700px" alt='prop' /> */}
                 </div>
            </div>
            </Carousel.Item>  
            <Carousel.Item  >    
            <div className='row d-flex'>
                 <div className='col text-center'>
                 <img src={picA} style={imageShadow}  /* width="1700vh" */ height="700px" alt='prop' />
                 </div>
            </div> 
            </Carousel.Item>  

        </Carousel>
        </CarouselContentDIv>
  )
}

export default CarouselContent
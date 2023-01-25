
import Lottie from 'react-lottie';
import LottieA from '../../lottie/lottieA.json';
import LottieB from '../../lottie/LottieB.json';
import LottieC from '../../lottie/LottieC.json';
import { AnimationContainer } from './AnimationElements';
import { useNavigate } from "react-router-dom";
import './style.css';
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

const Animation = (props) => {

    
    const navigate = useNavigate();

    useEffect(() =>{
      AOS.init({duration: 2000})
    },[])
    const defaultOptionsA = {
        loop: true,
        autoplay: true,
        animationData: LottieC,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const defaultOptionsB = {
        loop: true,
        autoplay: true, 
        animationData: LottieB,
      /*   rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        } */
      };

      const defaultOptionsArrow = {
        loop: true,
        autoplay: true,
        animationData: LottieA,
       /*  rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        } */
      };



      const textStyle={
        textAlign: "left",
        marginLeft:"3rem",
        marginTop:"5rem",
        fontSize:"2.5vh",
        color:"#FFFFFF",
        fontFamily: "Mohave"
      };

      const textStyleP={
        textAlign: "left",
        marginLeft:"3rem",
        color:"#FFFFFF",
        fontSize:"1.5vh",
        fontFamily: "Mohave"
      };

      const textStyleArrow={
        display: "inline-flex",
        color:"#FFFFFF",
        marginRight: "5rem",
        fontSize:"1.2vh"
      };
      
  return (

    <AnimationContainer>
    <div className="container d-flex flex-column">
        <div className="row" >

            <div className="col-12">
                <div className='button LottieStylesYellow' onClick={() =>  navigate("/ProjectA")}>
                
                    <div className="row">
                        <div className="col-6">
                            <p style={textStyle}>케플라비크</p>
                            <p style={textStyleP}> 시공부터 결제까지 한번에 해결해보세요</p>
                            <p style={textStyleArrow}>
                                <p>더보기</p><Lottie   options={defaultOptionsArrow} className="lottie" height={50} width={50}/>
                            </p>
                        </div>

                        <div className="col-6 lottieYellow">
                            <Lottie onClick={() => navigate("/Services")}  data-aos="zoom-in-right" className="lottieYellow"  options={defaultOptionsA} />
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-12 mt-1">
                <div onClick={() => navigate("/ProjectB")} className="LottieStylesGreen">
          
                    <div className="row">
                        <div className="col-6 lottiegreen">
                          <Lottie onClick={() => navigate("/Services")}  options={defaultOptionsB} className="lottiegreen"/>
                        </div>

                        <div className="col-6 lottiegreentext">

                          <p style={textStyle}>RU GOLF</p>
                          <p style={textStyleP}>스크린 골프 예약 시스템</p>
                          <p style={textStyleArrow}>
                          <p>더보기</p><Lottie   options={defaultOptionsArrow} className="lottie" height={40} width={50}/>
                          </p>
      
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 mt-1 ">
              <div  className='button LottieStylesBlue' onClick={() => navigate("/ProjectC")}>

                <div className="row">
                            <div className="col">
                                <p style={textStyle}>케플라비크</p>
                                <p style={textStyleP}>  시공부터 결제까지 한번에 해결해보세요</p>
                                <p style={textStyleArrow}>
                                <p>더보기</p><Lottie   options={defaultOptionsArrow} className="lottie" height={40} width={50}/>
                                </p>
                            </div>

                            <div className="col">
                              
                            </div>
                  </div>
        
              </div>
            </div>

            <div className="col-12 mt-1 mb-5 " >
              <button  className='button LottieStylesBlue' onClick={() => navigate("/ProjectD")} >

                <div className="row">
                            <div className="col">
                                <p style={textStyle}>케플라비크</p>
                                <p style={textStyleP}>  시공부터 결제까지 한번에 해결해보세요</p>
                                <p style={textStyleArrow}>
                                <p>더보기</p><Lottie   options={defaultOptionsArrow} className="lottie" height={40} width={50}/>
                                </p>
                            </div>

                            <div className="col">
                              
                            </div>
                  </div>
              </button>
            </div>

        </div>
    </div>
    </AnimationContainer>
  )
}

export default Animation
import React, { useEffect } from 'react';
import { Header, ProjectAMainContent, FooterSelection} from './ProjectAElements'
import './style.css';
import phone from '../../images/ProjectImages/phone.png';
import greenImageFull from '../../images/ProjectImages/greenImageFull.png';
import blueFooter from '../../images/ProjectImages/blueFooter.png';
import monitorImage from '../../images/ProjectImages/monitorImage.png';
import monitorDot from '../../images/ProjectImages/monitorDot.png';
import phoneDot from '../../images/ProjectImages/phoneDot.png';
import yellowhouse from '../../images/ProjectImages/yellowhouse.png';
import twophones from '../../images/ProjectImages/twophones.png';
import wholephone from '../../images/ProjectImages/wholephone.png';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectA = () => {

    const navigate = useNavigate();

    useEffect(() =>{
        AOS.init({duration: 2000})
    },[])
    
    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    
    }, []);
    

  return (
    
    <>
        <Header>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-12">
                <div className='headerText'>
                            <p><b>케플라비크</b></p>
                            <p>시공부터 결제까지 한번에 <br/> 해결해보세요</p>
                        </div>
                </div>
                <div class="col-lg-4 col-md-12 ">
                <img src={yellowhouse} data-aos="fade-right" className="heroHeaderImage"  alt="header image"/>
                </div>
             </div>
        </Header>

       {/*  <div className='row '>
                    <div className='col-lg-6 col-sm-12 text-center herosection'>
                        <div className='headerP' style={pStyles}>
                            <p><b>케플라비크</b></p>
                            <p>시공부터 결제까지 한번에 <br/> 해결해보세요</p>
                        </div>
                    </div>
                    <div className='col-6 herosection'>
                        <img src={yellowhouse} className="heroHeaderImage"  alt="header image"/>
                    </div>
                </div> */}
        <ProjectAMainContent>
            <div className='container flex-column'>
                <div className='row ContentRow'>
                    <div className='col-lg-2 col-sm-12 col-md-12'>
                        <b className='bold'>케플라비크</b>
                    </div>

                    <div className='col-lg-4 col-sm-12 col-md-12'>
                        <p className='text-start'>
                            케플라비크설명 케플라비크설명 케플라비크설명 케플라비크설명 케플라비크설명 케플라비크설명 케플라비크설명 케플라비크설명 케플라비크설명 케플라비크설명 케플
                        </p>
                    </div>
                </div>

                <div className='row ContentRow mt-5'>
                    <div className='col-lg-2'>
                        <b className='bold'>ANDROID</b>
                    </div>
                </div>

                <div className='row justify-content-md-center  mt-5'>
                 
                    <div className='col-lg-4 align-self-center text-start '>
                        <b className='text-start'> <span className='bold'>설계</span> <br/><br/><br/><br/><br/>대면으로 진행하는 계약과정과 각 시공사의 진행과정을 <span className='darktext'>어플</span>을 통해 관리할 수 있도록 설계했습니다. </b>
                    </div>
                    
                    <div className='col-lg-5 align-self-center' >
                        <img src={twophones} data-aos="fade-right" className="twoPhones"  alt='phone' />
                    </div>
                
                </div>

                <div className='row'>
                    <div className='col-lg-6 align-self-start'>
                        <img src={wholephone} data-aos="fade-left" className="wholephone" alt='phone' />
                        <div className='col-lg-12 align-self-end'>
                            <b>날짜, 작업 현황, 시간을 확인하고 <br/>작업 가능한 직원에게 배정할 수 있습니다.</b>
                        </div>
                    </div>
                    <div className='col-lg-6 align-self-end' >
                        <b className='align-self-start'>구독 시작, 최근 결제일 등으로 구독자를 관리하고 더 나은 서비스를 제안합니다.</b>
                        {/* <img src={phoneDot}  style={imagesStyle}  alt='phone' /> */}
                    <div className='row  justify-content-md-left mt-5'>
                    
                        <div className='col-lg-12 align-self-end'>
                            <img src={phoneDot} data-aos="fade-right" className="overflowImage"  alt='phone' />
                        </div>
                        <div className='col-lg-12 '>
                            <b>날짜, 작업 현황, 시간을 확인하고 <br/>작업 가능한 직원에게 배정할 수 있습니다.</b>
                        </div>
                    </div>
                    </div>
                </div>

                {/* <div className='row  justify-content-md-left mt-5'>
                    <div className='col-lg-6 align-self-enad'>
                        <b>날짜, 작업 현황, 시간을 확인하고 <br/>작업 가능한 직원에게 배정할 수 있습니다.</b>
                    </div>
                    <div className='col-lg-6 '>
                        <img src={phoneDot}  style={imagesStyle}  alt='phone' />
                    </div>
                </div> */}

                <div className='row justify-content-md-center mt-5'>
                    <div className='col-lg-4 align-self-center '>
                       <span className='bold text-cente' >WEB</span>
                    </div>
                    
                    <div className='col-lg-5 align-self-center'>
                      
                    </div>
                </div>

                <div className='row justify-content-md-center mt-5'>
                    <div className='col-lg-4 align-self-center text-start '>
                        <b className='text-start'> <span className='bold'>설계 </span><br/><br/><br/>구독 시작, 최근 결제일 등으 <br/>로 구독자를 관리하고  더 <br/>나은 서비스를 제안합니다. </b>
                    </div>
                    
                    <div className='col-lg-5 align-self-center'>
                        <img src={monitorDot} data-aos="fade-left" className="twoPhones"  alt='phone' />
                    </div>
                </div>

                <div className='row justify-content-md-left'>
                    <div className='col-lg-6'>
                        <img src={monitorImage} data-aos="fade-right" className="bottomImage" height="400px" alt='phone' />
                    </div>
                    <div className='col-lg-6 align-self-center text-start' >
                        <b>구독 시작, 최근 결제일 등으로 구독자를 관리하고 <br/>  더 나은 서비스를 제안합니다.</b>
                     </div>
                </div>
            </div>
           
        </ProjectAMainContent>
        <FooterSelection>
            <div  className='container-fluid mt-5 mb-5 '>
                
                <div className='row justify-content-center' >
                    <div className='col-lg-6 col-md-12  col-sm-12 text-sm-center' onClick={() => navigate("/ProjectB")} >
                        <img src={greenImageFull} data-aos="fade-left" className="LeftfooterImageStyle"  alt="header image"/>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 text-sm-center' onClick={() => navigate("/ProjectC")}>
                        <img src={blueFooter} data-aos="fade-right" className="RightfooterImageStyle"  alt="header image"/>
                    </div>
                </div>
            
            </div>
        </FooterSelection>

    </> 
)
}

export default ProjectA
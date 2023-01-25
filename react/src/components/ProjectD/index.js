import React, { useEffect } from 'react';
import waveImage from '../../images/ProjectImages/waveImage.png';
import machineA from '../../images/ProjectImages/machineA.png';
import machineB from '../../images/ProjectImages/machineB.png';
import machineC from '../../images/ProjectImages/machineC.png';
import greenImageFull from '../../images/ProjectImages/greenImageFull.png';
import yellowFooter from '../../images/ProjectImages/yellowFooter.png';
import { Header, ProjectDMainContent,FooterSelection} from './ProjectDElements'
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectD = () => {
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
                            <p><b>WASHCUBE</b></p>
                            <p>세차장 키오스크 서비스</p>
                        </div>
                </div>
                <div class="col-lg-4 col-md-12 ">
                <img src={waveImage} data-aos="fade-right" className="heroHeaderImage"  alt="header image"/>
                </div>
             </div>
        </Header>
        <ProjectDMainContent>
            <div className='container d-flex flex-column '>
                <div className='row ContentRow justify-content-md-left'>
                    <div className='col-lg-2 '>
                    <b className='bold'>WASHCUBE</b>
                    </div>
                    <div className='col-lg-5'>
                        <p>워시큐브 설명설명</p>    
                     </div>
                </div>


                <div className='row ContentRow justify-content-md-left mt-5'>
                    <div className='col-lg-2'>
                    <b className='bold'>KIOSK</b>
                    </div>
                </div>

                
                <div className='row  justify-content-md-left mt-5'>
                    <div className='col col-md-6 align-self-center'>
                    <b>설계 <br/>세차장 키오스크 서비스입니다.</b>
                    </div>
                    <div className='col col-md-6'>
                    <img src={machineA}  className="ipodImage"  alt='first phone' />
                     </div>
                </div>

                <div className='row  justify-content-md-left mt-5'>
                    <div className='col col-md-6'>
                    <img src={machineB}  className="ipodImage"  alt='first phone' />
                   
                    </div>
                    <div className='col col-md-6 align-self-center'>
                    <b>키오스크 설명</b>
                     </div>
                </div>

                <div className='row  justify-content-md-left mt-5'>
                    <div className='col col-md-6 align-self-center'>
                   
                    <b>키오스크 설명.</b>
                    </div>
                    <div className='col col-md-6'>
                    <img src={machineC}  className="ipodImage"  alt='first phone' />
                   
                     </div>
                </div>

               
            </div>
           
            
        </ProjectDMainContent>
        <FooterSelection>
            <div  className='container-fluid '>
                
                <div className='row justify-content-center' >
                    <div className='col-lg-6 col-md-12  col-sm-12 text-sm-center'  >
                        <img src={greenImageFull} className="LeftfooterImageStyle" onClick={() => navigate("/ProjectB")} alt="header image"/>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 text-sm-center' onClick={() => navigate("/ProjectC")}>
                        <img src={yellowFooter} className="RightfooterImageStyle"  alt="header image"/>
                    </div>
                </div>
            
            </div>
        </FooterSelection>
    </>
  )
}

export default ProjectD;
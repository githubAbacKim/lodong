import React,{useEffect} from 'react'
import { Header, ProjectBMainContent, FooterSelection} from './ProjectBElements'
import './style.css';
import phone from '../../images/ProjectImages/phone.png';
import green from '../../images/ProjectImages/green.png';
import { useNavigate } from "react-router-dom";
import greenFooter from '../../images/ProjectImages/greenFooter.png';
import blueFooter from '../../images/ProjectImages/blueFooter.png';
import yellowFooter from '../../images/ProjectImages/yellowFooter.png';
import greenA from '../../images/ProjectImages/greenA.png';
import Groupthreephones from '../../images/ProjectImages/Groupthreephones.png';
import greendotPhone from '../../images/ProjectImages/greendotPhone.png';
import dashboard from '../../images/ProjectImages/dashboard.png';
import greenDashboard from '../../images/ProjectImages/greenDashboard.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectB = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const body = document.querySelector('#root');
    
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    
    }, []);

    useEffect(() =>{
        AOS.init({duration: 2000})
    },[])
    const imagesStyle = {
        width: "300px",
        height: "700px"
    }
  
    const headerImage = {
        height: "30rem",
        marginTop: "5rem"
    }

    const pStyles = {
        float: 'right',
        color: "white",
        marginTop: '10rem',
        fontSize: "33px"
    }

    const pStyle = {
        color: "white",
        marginLeft:"2rem"
    }

  return (
  <>
        <Header>

        <div class="row justify-content-center">
                <div class="col-lg-4 col-md-12">
                <div className='headerText'>
                            <p><b>RU GOLF</b></p>
                            <p>시공부터 스크린골프 예약 시스템 한번에 </p>
                        </div>
                </div>
                <div class="col-lg-4 col-md-12">
                <img src={green} className="heroHeaderImage"  alt="header image"/>
                </div>
             </div>


              {/*   <div className='row '>
                    <div className='col'>
                        <div className='headerP' style={pStyles}>
                            
                        <p><b>RU GOLF</b></p>
                        <p>시공부터 스크린골프 예약 시스템 한번에 </p>
                    
                        </div>
                    </div>
                    <div className='col'>
                        <img src={green}  style={headerImage} alt="header image"/>
                    </div>
                </div> */}
               {/*  <div className='row text-light'>
                    <div className='col d-flex bottom_text'>
                        <p style={pStyle}>기간</p>
                        <p style={pStyle}>  2022.10 - 2022.11</p>&emsp;&emsp;&emsp;
                        <p style={pStyle}>플랫폼  </p>
                        <p style={pStyle}>안드로이드/웹</p>
                    </div>
                </div> */}
           
        </Header>
        <ProjectBMainContent>
            <div className='container d-flex flex-column '>
                <div className='row ContentRow justify-content-md-left'>
                    <div className='col-lg-2 '>
                    <b className='bold'>RU GOLF</b>
                    </div>
                    <div className='col-lg-5'>
                        <p>RU GOLF는 스크린골프장이다... 그렇다....</p>    
                     </div>
                </div>


                <div className='row ContentRow justify-content-md-left mt-5'>
                    <div className='col-lg-2'>
                    <b className='bold'>ANDROID</b>
                    </div>
                </div>
                

                <div className='row justify-content-md-center  mt-5'>
                 
                 <div className='col-lg-4 align-self-center text-start '>
                     <b className='text-start'> <span className='bold'>설계</span> <br/><br/><br/><br/><br/>대면으로 진행하는 계약과정과 각 시공사의 진행과정을 <span className='darktext'>어플</span>을 통해 관리할 수 있도록 설계했습니다. </b>
                 </div>
                 
                 <div className='col-lg-5 align-self-center' >
                     <img src={greenA} data-aos="fade-right" className="twoPhones"  alt='phone' />
                 </div>
             
             </div>
                
                <div className='row  justify-content-md-left mt-5'>
                    <div className='col-lg-6 align-self-center'>
                    <img src={Groupthreephones} data-aos="fade-left" className="twoPhones"  alt='phone' />
                   
                    </div>
                    <div className='col-lg-6 align-self-center'>
                    <b >다양한 강사들에<span className='bold'>게 레슨을 예 약</span>하고</b> 
                     </div>
                </div>

                <div className='row  justify-content-md-left mt-5'>
                    <div className='col-lg-6 align-self-center'>
                 
                    <b >내정보에서 예약목록들을 확인하고 <br/> 레슨과 예약을 관리해보세요.</b> 
                    </div>
                    <div className='col-lg-6 align-self-center'>
                 
                    <img src={greendotPhone} data-aos="fade-right" className="twoPhones"  alt='phone' />
                     </div>
                </div>


                <div className='row justify-content-md-center mt-5'>
                    <div className='col-lg-4 align-self-center '>
                       <span className='bold' >WEB</span>
                    </div>
                    
                    <div className='col-lg-5 align-self-center'>
                      
                    </div>
                </div>


                <div className='row  justify-content-md-left mt-5'>
                    <div className='col-lg-6 align-self-center'>
                 
                    <b >설계 <br/>예약정보를 웹사트로 불러와 알림이 울리고 카테고리 별로 예약현황을 알 수 있습니다.</b> 
                    </div>
                    <div className='col-lg-6 align-self-center'>
                 
                    <img src={dashboard} data-aos="fade-right" className="twoPhones"  alt='phone' />
                     </div>
                </div>

             


                <div className='row  justify-content-md-left mt-5'>
                    <div className='col-lg-6 align-self-center'>
                        <img src={greenDashboard}  data-aos="fade-left" className="twoPhones"  alt='phone' />
                     </div>
                    <div className='col-lg-6 align-self-center'>
                        <b >설계 <br/> 예약정보를 웹사트로 불러와 알림이 울리고 카테고리 별로 예약현황을 알 수 있습니다.</b> 
                     </div>
                </div>


                <div className='row  justify-content-md-left mt-5'>
                    <div className='col-lg-6 '>
                       <b className='text-start'>상호작용하는 앱/웹</b>
                     </div>
                    <div className='col-lg-6'>
                        <b>앱에서 예약한 정보를 통해 웹에 알림이 뜹니다. <br/> 웹에서 예약 관리도 함께 할 수 있습니다.</b> 
                     </div>
                </div>
            </div>
           
            
        </ProjectBMainContent>
        <FooterSelection>
            <div  className='container-fluid '>
                
                <div className='row justify-content-center' >
                    <div className='col-lg-6 col-md-12  col-sm-12 text-sm-center' onClick={() => navigate("/ProjectA")} >
                        <img src={yellowFooter} data-aos="fade-right" className="LeftfooterImageStyle"  alt="header image"/>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 text-sm-center' onClick={() => navigate("/ProjectC")}>
                        <img src={blueFooter} data-aos="fade-left" className="RightfooterImageStyle"  alt="header image"/>
                    </div>
                </div>
            
            </div>
        </FooterSelection>

    </> 
  )
}

export default ProjectB
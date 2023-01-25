import React,{useEffect} from 'react'
import { Header, ProjectCMainContent, FooterSelection} from './ProjectCElements'
import './style.css';
import { useNavigate } from "react-router-dom";
import blueimage from '../../images/ProjectImages/blueImage.png';
import ipod from '../../images/ProjectImages/ipod.png';
import threephones from '../../images/ProjectImages/threephones.png';
import firstphone from '../../images/ProjectImages/firstphone.png';
import callPhone from '../../images/ProjectImages/callPhone.png';
import greenImageFull from '../../images/ProjectImages/greenImageFull.png';
import darkBlue from '../../images/ProjectImages/darkBlue.png';
import circlecallphone from '../../images/ProjectImages/circlecallphone.png';
import blueTwophone from '../../images/ProjectImages/blueTwophone.png';


const ThirdProject = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const body = document.querySelector('#root');
    
        body.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    
    }, []);


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

  
  return (
    <>
        <Header>
                <div className='row '>
                    <div className='col'>
                        <div className='headerP' style={pStyles}>
                            
                        <p><b>돌봄대장</b></p>
                        <p>시니어 돌봄 및 생활편의 서비스</p>
                    
                        </div>
                    </div>
                    <div className='col'>
                        <img src={blueimage}  style={headerImage} alt="header image"/>
                    </div>
                </div>
               {/*  <div className='row'>
                    <div className='col d-flex bottom_text'>
                        <p style={pStyle}>기간</p>
                        <p style={pStyle}>2022.06 - 2022.11</p>&emsp;&emsp;&emsp;
                        <p style={pStyle}>플랫폼</p>
                        <p style={pStyle}>안드로이드</p>
                    </div>
                </div> */}
           
        </Header>
        <ProjectCMainContent>
            <div className='container d-flex flex-column '>
                <div className='row ContentRow justify-content-md-left'>
                    <div className='col-lg-2 '>
                    <b className='bold'>돌봄대장</b>
                    </div>
                    <div className='col-lg-5'>
                        <p>집에 거주하는 부모님이 필요로 하는 모든 서비스를 제공하는 지역사회통합돌봄 서비스입니다. 부모님이 살던 곳에서, 편안한 노후를 보낼 수 있는 개인 맞춤형 노후지원서비스 돌봄대장입니다.</p>    
                     </div>
                </div>


                <div className='row ContentRow justify-content-md-left mt-5'>
                    <div className='col-lg-2'>
                    <b className='bold'>ANDROID</b>
                    </div>
                </div>

                
                <div className='row  justify-content-md-left mt-5'>
                    <div className='col col-md-6 align-self-center'>
                    <b>날짜, 작업 현황, 시간을 확인하고 <br/>작업 가능한 직원에게 배정할 수 있습니다.</b>
                    </div>
                    <div className='col col-md-6'>
                    <img src={callPhone}  className="ipodImage"  alt='first phone' />
                     </div>
                </div>

                <div className='row  justify-content-md-left mt-5'>
                    <div className='col col-md-6'>
                    <img src={circlecallphone}  className="ipodImage"  alt='first phone' />
                   
                    </div>
                    <div className='col col-md-6 align-self-center'>
                    <b>사용자가 버튼을 눌러 전화를 하면 받는 사람에게 <br/> 회원정보가 뜹니다.</b>
                     </div>
                </div>

                <div className='row  justify-content-md-left mt-5'>
                    <div className='col col-md-6 align-self-center'>
                   
                    <b>회원에 대한 정보를 리스트화하여 정리하였습니다.</b>
                    </div>
                    <div className='col col-md-6'>
                    <img src={blueTwophone}  className="ipodImage"  alt='first phone' />
                   
                     </div>
                </div>

                <div className='row  justify-content-md-left mt-5'>
                    <div className='col col-md-12 '>
                    <img src={threephones}  className="ipodImage"   alt='phone' />
                    </div>
                    <div className='col col-md-12'>
                    <b>날짜, 작업 현황, 시간을 확인하고 <br/>작업 가능한 직원에게 배정할 수 있습니다.</b>
                     </div>
                </div>
                

                <div className='row  justify-content-md-left mt-5'>
                    <div className='col-lg-6'>
                    <b>관련기사</b>
                     </div>
                </div>
                <div className='row  mt-5'>
                    <div className='col text-center'>
                    <img src={ipod}   className="ipodImage"  alt='ipod image' />
                    </div>
                </div>
            </div>
        
        </ProjectCMainContent>
        <FooterSelection>
            <div  className='container-fluid '>
                
                <div className='row justify-content-center' >
                    <div className='col-lg-6 col-md-12  col-sm-12 text-sm-center'  >
                        <img src={greenImageFull} className="LeftfooterImageStyle" onClick={() => navigate("/ProjectB")} alt="header image"/>
                    </div>

                    <div className='col-lg-6 col-md-12 col-sm-12 text-sm-center' onClick={() => navigate("/ProjectD")}>
                        <img src={darkBlue} className="RightfooterImageStyle"  alt="header image"/>
                    </div>
                </div>
            
            </div>
        </FooterSelection>

    </> 
  )
}

export default ThirdProject
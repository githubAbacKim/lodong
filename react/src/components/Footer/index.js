import React from 'react'
import {  FooterCopyright,FooterContainer} from './FooterElements'
import lodonglogo from '../../images/logo/lodonglogo.png';
const FooterSection = () => {

const logoStyle = {
    width: "10rem",
    height:"10rem"
}

  return (
    <>
    <hr/>
     <FooterContainer> 
    <div className="container-fluid" id='footer'>

    <div className="row">
       
            <div className="col-sm">
                <div className=" col-sm mt-4">
                    <b> ADDRESS</b>
                </div>
                <div className=" col-sm">
                    <b> 경기도 안양시 만악구 덕천로 152번길 25 <br/> 아이에스비즈타워 B동 1506호</b>
                </div>
            </div>

            <div className=" col-sm">
                <div className=" col-sm mt-4">
                    <b> TEL</b>
                </div>
                <div className=" col-sm">
                    <b>010-9603-4111</b>
                </div>
            </div>
            <div className=" col-sm">
                <div className=" col-sm mt-4">
                    <b> E-MAIL</b>
                </div>
                <div className=" col-sm">
                    <b>cyj@lodong.co.kr</b>
                </div>
            </div>
            
        <div className='col  p-5 text-center'>
        <img src={lodonglogo} data-aos="fade-right" style={logoStyle} className="twoPhones"  alt='phone' />
        </div>
    </div>
  
        <FooterCopyright>
             Copyright 2022. Lodong Co., Ltd. All rights reserced.
        </FooterCopyright>
    </div>
    </FooterContainer>  
    </>
  )
}

export default FooterSection
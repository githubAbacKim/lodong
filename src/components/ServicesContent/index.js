import React from 'react'
import { ServicesContentSectionH1 } from './ServicesContentElements'
import './ServicesStyle.css';
import  picA  from './A.png';
import  picB  from './B.png';
import  picC  from './C.png';
import  picD  from './D.png';
import  picE  from './E.png';
import  picF  from './F.png';
import  picG  from './G.png';
import  picH  from './H.png';

const ServicesContentSection = () => {
  return (
        
    <div className="container-fluid Maincontainer">
        <div className="row pt-5">
            <div className="col-4 text-center">
              
              <ServicesContentSectionH1 className='font-weight-bold headerText'><p className='h1'>로동은<br/>이렇게 <br/>개발<br/>합니다.</p></ServicesContentSectionH1>
    
            </div>
            <div className="col-6 text-center">
            <div class="container">
                  <div className="box">
                        <span>1</span>
                        <span className='textSpan'>  <h1 className='contentText'>컨 <br/>설<br/>팅<br/>및<br/>솔<br/>루<br/>션</h1></span>
                        <img src={picA}  alt=' header content one' />
                        </div>
                        <div class="box">
                          <span>2</span>
                          <span className='textSpan'>  <h1 className='contentText'>기<br/>획</h1></span>
                          <img src={picB}   alt=' header content two' />
                        
                        </div>
                        <div class="box">
                          <span>3</span>
                          <span className='textSpan'>  <h1 className='contentText'>디<br/>자<br/>인</h1></span>
                          <img src={picC}   alt=' header content three' />
                        
                        </div>
                        <div class="box">
                          <span>4</span>
                          <span className='textSpan'>  <h1 className='contentText'>개<br/>발</h1></span>
                          <img src={picD}  alt=' header content four' />
                        
                        </div>
                        <div class="box">
                        <span>5</span>
                        <span className='textSpan'><h1 className='contentText'>테<br/>스<br/>트</h1></span>
                        <img src={picE}   alt=' header content five' />
                        
                        </div>
                        <div class="box">
                          <span>6</span>
                          <span className='textSpan'><h1 className='contentText'>퍼<br/>블<br/>리<br/>싱</h1></span>
                          <img src={picF} alt=' header content six' />
                          
                        </div>
                        <div class="box">
                          <span>7</span>
                          <span className='textSpan'><h1 className='contentText'>작<br/>업<br/>완<br/>료</h1></span>
                          <img src={picG}  alt=' header content seven' />
                            
                        </div>
                        <div class="box">
                          <span>8</span>
                          <span className='textSpan'><h1 className='contentText'>유<br/>지<br/>보<br/>수</h1></span>
                         <img src={picH}   alt=' header content eight' />
                        </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesContentSection
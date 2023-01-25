import React,{useEffect,useState} from 'react'


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
import AOS  from 'aos';
import 'aos/dist/aos.css'


const ServicesContentSection = () => {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    AOS.init({duration: 200});
  }, []);
  
const contentH1 = {

}

  return (
        
    <div className="container-fluid Maincontainer" data-aos="zoom-in">
        <div className="row pt-5">
            <div className="col-sm-12 text-center col-lg-4">
              
              <ServicesContentSectionH1 className='font-weight-bold headerTexts'>
                  {isShown ? 
                    <div>
                      <p className='h1' data-aos="flip-left"><span className='redtext'>로동</span>은<br/>이렇게 <br/>합니다.</p>
                    </div>
                    :
                    <p className='h1' data-aos="flip-right"><span className='redtext'>로동</span>은<br/>이렇게 <br/><span className='redtext'>개발</span><br/>합니다.</p>
                  }
              </ServicesContentSectionH1>
            </div>

          <div className=" col-lg-6 text-center col-sm-12" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <div className="container">
                  <div className="box">
                        <span>1</span>
                        <span className='textSpan'> 
                          <h1 className='contentText'>컨 <br/>설<br/>팅<br/>및<br/>솔<br/>루<br/>션</h1>
                        </span>
                          <h1 className='contentTextInsideH1 text-start'>하나를 말하시면 열을 <br/>아는 로동</h1>
                          <p className='contentTextInside text-start'>대표님들의 상상을 현실로 만들어드립니다.<br/> 완성도 높은 건설팅, 완벽한 솔루션으로<br/> 증명합니다.</p>
                        <img src={picA}  alt=' header content one' />
                        </div>
                        <div className="box">
                          <span>2</span>
                          <span className='textSpan'> 
                            <h1 className='contentText'>기<br/>획</h1>
                          </span>
                          <h1 className='BcontentTextInsideH1 text-start'>노련한 경험 위에 쌓는 <br/> 혁신적인 기획 </h1>
                          <p className='BcontentTextInside text-start'>효율적인 어플 구동을 위해 <br/> 빈틈 없는 기획 단계를 포함합니다.</p>
                          <img src={picB}  alt=' header content two' />
                        </div>
                        <div className="box">
                          <span>3</span>
                          <span className='textSpan'>  <h1 className='contentText'>디<br/>자<br/>인</h1></span>
                          <h1 className='CcontentTextInsideH1 text-start'>심플함과 화려함의 <br/> 밸런스  </h1>
                          <p className='CcontentTextInside text-start'>최고의 전문 디자이너와 함께 <br/> 작업의 고급스러운 영혼을 부여합니다.</p>
                          <img src={picC}   alt=' header content three' />
                        
                        </div>
                        <div className="box">
                          <span>4</span>
                          <span className='textSpan'>  <h1 className='contentText'>개<br/>발</h1></span>
                          <h1 className='DcontentTextInsideH1 text-start'>몇 수 앞을 더<br/> 다보는 로동</h1>
                          <p className='DcontentTextInside text-start'>단순구동이 아닌 향후 보수 및 <br/> 추가기능까지 고려한 개발을<br/> 진행합니다.</p>
                          <img src={picD}  alt=' header content four' />
                        
                        </div>  
                        <div className="box">
                        <span>5</span>
                        <span className='textSpan'><h1 className='contentText'>테<br/>스<br/>트</h1></span>
                        <h1 className='EcontentTextInsideH1 text-start'>완벽의, 완벽을 위한, <br/> 완벽에 한 개발</h1>
                          <p className='EcontentTextInside text-start'>아주 사소한 문제도 절대 <br/> 용납하지 않습니다.</p>
                        <img src={picE}   alt=' header content five' />
                        
                        </div>
                        <div className="box">
                          <span>6</span>
                          <span className='textSpan'><h1 className='contentText'>퍼<br/>블<br/>리<br/>싱</h1></span>
                          <h1 className='FcontentTextInsideH1 text-start'>A to Z <br/> with 로동</h1>
                          <p className='FcontentTextInside text-start'>빈틈없는 정책 검토와 퍼블리싱까지 <br/> 대행해 드립니다.</p>
                          <img src={picF} alt=' header content six' />
                          
                        </div>
                        <div className="box">
                          <span>7</span>
                          <span className='textSpan'><h1 className='contentText'>작<br/>업<br/>완<br/>료</h1></span>
                          <h1 className='GcontentTextInsideH1 text-start'>용두용미, <br/> 화룡정점</h1>
                          <p className='GcontentTextInside text-start'>완료 보고 및 개발 자료 반환과 <br/> 폐기 후 개발소스까지 전달해드린 후<br/> 마무리합니다.</p>
                          <img src={picG}  alt=' header content seven' />
                            
                        </div>
                        <div className="box">
                          <span>8</span>
                          <span className='textSpan'><h1 className='contentText'>유<br/>지<br/>보<br/>수</h1></span>
                          <h1 className='HcontentTextInsideH1 text-start'>대표님과 저희의 <br/> 인연은 끝까지</h1>
                          <p className='HcontentTextInside text-start'>작업이 완료 되었어도 지속적인 <br/> 모니터링과 추가 AS로 절대적인<br/> 만족을 보장합니다.<br/> 마무리합니다.</p>
                         <img src={picH}   alt=' header content eight' />
                        </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesContentSection
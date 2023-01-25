import React,{useEffect} from 'react'
import AOS  from 'aos';
import 'aos/dist/aos.css'
import { UpperFooterContent,RedText,UpperRightFooterH1,UpperLeftFooterH1 } from './UpperFooterElemets';



const UpperFooter = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
      }, []);

  return (
    <UpperFooterContent>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg" data-aos="zoom-in-right">
                    <UpperRightFooterH1>WE ARE <br/>YOURS<br/><RedText>TEAM.</RedText></UpperRightFooterH1>
                </div>

                <div className="col-lg" data-aos="zoom-in-left">
                    <UpperLeftFooterH1 >WE ARE <br/><RedText>LODONG.</RedText></UpperLeftFooterH1>
                </div>

            </div>
        </div>
    </UpperFooterContent>
  )
}

export default UpperFooter 
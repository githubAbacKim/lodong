import React from 'react'
import { FooterContent ,FooterCopyright,FooterContainer,FooterRow} from './FooterElements'

const FooterSection = () => {
  return (
    <>
    <hr/>
    <FooterContent>

     <FooterContainer> 
    <div className="container-fluid" id='footer'>

        <FooterRow>
            <div className="row">
                <div className=" col-sm">
                    <b> ADDRESS</b>
                </div>
                <div className="col-sm">
                     <b> TEL</b>
                </div>
                <div className=" col-sm">
                    <b> E-Mail</b>
                </div>
            </div>
            </FooterRow>
            <FooterRow>
        <div className="row">
            <div className="col-sm">
                <p>경기도 안양시 만악구 덕천로 152번길 25 <br/>
            아이에스비즈타워 B동 1506호</p>
            </div>
            <div className="col-sm  ">
                <p>010-9603-4111</p>
            </div>
            <div className="col-sm">
                <p>cyj@lodong.co.kr</p>
            </div>
        </div>
        </FooterRow>
                <FooterCopyright>
                    Copyright 2022. Lodong Co., Ltd. All rights reserced.
                </FooterCopyright>
    </div>
    </FooterContainer>  
</FooterContent>
  </>
  )
}

export default FooterSection
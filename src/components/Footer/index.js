import React from 'react'
import { FooterContent ,FooterCopyright} from './FooterElements'

const FooterSection = () => {
  return (
    <>
    <hr/>
    <FooterContent>
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <b> ADDRESS</b>
                </div>
                <div className="col-2">
                     <b> TEL</b>
                </div>
                <div className="col-4">
                    <b> E-Mail</b>
                </div>
            </div>
        <div className="row">
            <div className="col-3">
                <p>경기도 안양시 만악구 덕천로 152번길 25 <br/>
            아이에스비즈타워 B동 1506호</p>
            </div>
            <div className="col-2">
                <p>010-9603-4111</p>
            </div>
            <div className="col-4">
                <p>cyj@lodong.co.kr</p>
            </div>
        
        </div>
        <div className="row">
            <div className="col">
                <FooterCopyright>
                    Copyright 2022. Lodong Co., Ltd. All rights reserced.
                </FooterCopyright>
            </div>
        </div>
        </div>

</FooterContent>
  </>
  )
}

export default FooterSection
import React from 'react'
import { UpperFooterContent,RedText,UpperRightFooterH1,UpperLeftFooterH1 } from './UpperFooterElemets'
const UpperFooter = () => {
  return (
    <UpperFooterContent>
        <div className="container-fluid">
            <div className="row">

                <div className="col-6">
                    <UpperRightFooterH1>WE ARE <br/>YOURS<br/><RedText>TEAM.</RedText></UpperRightFooterH1>
                </div>

                <div className="col-6">
                    <UpperLeftFooterH1>WE ARE <br/><RedText>LODONG.</RedText></UpperLeftFooterH1>
                </div>

            </div>
        </div>
    </UpperFooterContent>
  )
}

export default UpperFooter 
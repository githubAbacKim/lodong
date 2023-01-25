
import React,{ useEffect } from 'react';
import { TeamContainer,TeamContentH1,Images ,TeamImages,TeamContentDiv,TeamContent ,TeamContentParagraph,TeamContentColumns,TeamContentInsideColumns} from './TeamElements'
import AOS  from 'aos';
import leftBar from '../../images/leftBar.svg';
import rightBar from '../../images/rightBar.svg';
/* import a from '../../images/a.svg';
import b from '../../images/b.svg';
import c from '../../images/c.svg';
import e from '../../images/e.svg';
import g from '../../images/g.svg';
import h from '../../images/h.svg';
import i from '../../images/i.svg';
import j from '../../images/j.svg';
import k from '../../images/k.svg'; */
import imagea from '../../images/teamimages/imagea.png';
import imageb from '../../images/teamimages/imageb.png';
import imagec from '../../images/teamimages/imagec.png';
import imaged from '../../images/teamimages/imaged.png';
import imageg from '../../images/teamimages/imageg.png';
import imageh from '../../images/teamimages/imageh.png';
import imagei from '../../images/teamimages/imagei.png';
import imagej from '../../images/teamimages/imagej.png';
import { RedText } from '../UpperFooter/UpperFooterElemets';

const TeamSection = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
    <TeamContainer>
    <TeamContent>
      
      <TeamContentColumns>
        <img src={leftBar}  height="400px" alt='prop' />
      </TeamContentColumns>
      
      <TeamContentColumns>
      <TeamContentInsideColumns>
        
           <TeamContentH1>WE ARE <br/> YOURS <br/> <RedText> TEAM.</RedText></TeamContentH1>
        </TeamContentInsideColumns>
        <TeamContentInsideColumns>
            <TeamImages>
            <Images> <img src={imagea}  height="25px" alt='prop' /></Images>
            <Images> <img src={imageb}  height="25px" alt='prop' /></Images>
            <Images> <img src={imagec}  height="25px" alt='prop' /></Images>
            <Images> <img src={imaged}  height="25px" alt='prop' /></Images>
            <Images> <img src={imagea}  height="25px" alt='prop' /></Images>
          </TeamImages>
        </TeamContentInsideColumns>
        <TeamContentInsideColumns>
          <TeamImages>
            <Images><img src={imageg}  height="25px" alt='prop' /></Images>
            <Images> <img src={imageh}  height="25px" alt='prop' /></Images>
            <Images> <img src={imagei}  height="25px" alt='prop' /></Images>
            <Images><img src={imagej}  height="25px" alt='prop' /></Images>
            <Images><img src={imagea}  height="25px" alt='prop' /></Images>
          </TeamImages>
        </TeamContentInsideColumns>

        <TeamContentInsideColumns>
          <TeamContentDiv >
             <TeamContentParagraph> 여러분의 자리가 되었으면 합니다.</TeamContentParagraph>
          </TeamContentDiv>
        </TeamContentInsideColumns>

      </TeamContentColumns>

        <TeamContentColumns>
          <img src={rightBar}  height="400px" alt='prop' />
        </TeamContentColumns>
    </TeamContent>   
           

    </TeamContainer>
  )
}

export default TeamSection
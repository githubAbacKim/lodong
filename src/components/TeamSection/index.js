import React from 'react'
import { TeamContainer,TeamContentH1,Images ,TeamImages,TeamContentDiv,TeamContent ,TeamContentParagraph,TeamContentColumns,TeamContentInsideColumns} from './TeamElements'

import leftBar from '../../images/leftBar.svg';
import rightBar from '../../images/rightBar.svg';
import a from '../../images/a.svg';
import b from '../../images/b.svg';
import c from '../../images/c.svg';
import e from '../../images/e.svg';
import g from '../../images/g.svg';
import h from '../../images/h.svg';
import i from '../../images/i.svg';
import j from '../../images/j.svg';
import k from '../../images/k.svg';
import { RedText } from '../UpperFooter/UpperFooterElemets';

const TeamSection = () => {
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
            <Images> <img src={a}  height="25px" alt='prop' /></Images>
            <Images> <img src={b}  height="25px" alt='prop' /></Images>
            <Images> <img src={c}  height="25px" alt='prop' /></Images>
            <Images> <img src={e}  height="25px" alt='prop' /></Images>
            <Images> <img src={e}  height="25px" alt='prop' /></Images>
          </TeamImages>
        </TeamContentInsideColumns>
        <TeamContentInsideColumns>
          <TeamImages>
            <Images><img src={g}  height="25px" alt='prop' /></Images>
            <Images> <img src={h}  height="25px" alt='prop' /></Images>
            <Images> <img src={i}  height="25px" alt='prop' /></Images>
            <Images><img src={j}  height="25px" alt='prop' /></Images>
            <Images><img src={k}  height="25px" alt='prop' /></Images>
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
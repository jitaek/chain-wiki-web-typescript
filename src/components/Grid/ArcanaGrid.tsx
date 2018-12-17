import * as React from 'react';
import styled, { media } from '../../util/styled-components';

const Grid = styled.div`
    @supports (display: grid) {
      display: flex;
      display: grid;
      justify-content: center;
  
      margin: 10px;
      
      grid-template-columns: 1fr 1fr;
      grid-template-rows: repeat(auto-fill, 1fr);
  
      grid-column-gap: 10px;
      grid-row-gap: 10px;
  
    ${media.tablet`
        
        grid-template-columns: repeat(auto-fill, 200px);
        grid-template-rows: repeat(auto-fill, 1fr);
  
        grid-column-gap: 10px;
        grid-row-gap: 20px;

    `}

    @supports not (display: grid) {
        display: block;
    }

  }
`;


const ArcanaGrid: React.SFC = (props) => {

    return (
        <Grid>{props.children}</Grid>
    );
}

export default ArcanaGrid;
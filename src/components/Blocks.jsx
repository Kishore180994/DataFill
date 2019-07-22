import React from 'react';
import Block from './Block';
import styled from '@emotion/styled';
import Editable from './Editable';

const StyledList = styled.ul`
  list-style-type: none;
  white-space:nowrap;
  margin: 0;
  padding: 0;
`;

const StyLI = styled.li`
  display: block;
  float: left;
  border: 2px solid purple;
`;

const Blocks = ({ laneId, blocks, activateBlock = () => { }, editBlock = () => { }, deleteBlock = () => { } }) => {
  return (
    <StyledList className='blocks'>
      {blocks.map(({ bid, bname, color, width, isEditing }) => (
        <StyLI key={bid}>
          <Block onClick={activateBlock.bind(null, [laneId, bid])} >
            <Editable Name={bname} Width={width} Color={color} editBlock={editBlock.bind(null, [laneId, bid])} deleteBlock={deleteBlock.bind(null, [laneId, bid])} isEditing={isEditing} />
          </Block>
        </StyLI>
      ))}
    </StyledList>
  );
};

export default Blocks;
import React from 'react';
import Block from './Block';
import styled from '@emotion/styled';
import Editable from './Editable';

const StyledList = styled.div`
  overflow: auto;
`;

const BlocksLI = styled.li`
  display: inline;
  float: left;
  border: 2px solid black;
`;

const Blocks = ({ laneId, blocks, activateBlock = () => { }, editBlock = () => { }, deleteBlock = () => { } }) => {
  return (
    <div>
      {blocks.map(({ bid, bname, color, width, isEditing }) => (
        <BlocksLI key={bid}>
          <Block onClick={activateBlock.bind(null, [laneId, bid])} >
            <Editable Name={bname} Width={width} Color={color} editBlock={editBlock.bind(null, [laneId, bid])} deleteBlock={deleteBlock.bind(null, [laneId, bid])} isEditing={isEditing} />
          </Block>
        </BlocksLI>
      ))}
    </div>
  );
};

export default Blocks;
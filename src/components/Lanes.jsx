import React, { Component } from 'react';
import styled from '@emotion/styled';
import Block from './Block';
import Editable from './Editable';
import Blocks from './Blocks';

const StyledButton = styled.button`
`;

const BlocksUl = styled.ul`
  display: flex;
  list-style: none;
`;

const LanesUl = styled.ul`
  list-style: none;
`;

const Lanesli = styled.li`
  display: flex; /** Button align */
`;

class Lanes extends Component {
  render() {
    const { lanes, editBlock = () => { }, addBlock = () => { }, activateBlock = () => { }, deleteBlock = ()=> {} } = this.props;
    return (
      <LanesUl>
        {lanes.map(({ lid, lname, blocks, laneEdit }) => (
          <Lanesli key={lid} className='List'>
            <BlocksUl>
              <li><Block onClick={activateBlock.bind(null, [lid, 0])}>
                <Editable Name={lname} editBlock={editBlock.bind(null, [lid, 0])} isEditing={laneEdit} head={true}/>
              </Block></li>
              <Blocks laneId={lid} blocks={blocks} activateBlock={activateBlock} editBlock={editBlock} deleteBlock={deleteBlock} head={false} />
            </BlocksUl>
            <StyledButton className='add-block' onClick={addBlock.bind(null, lid)}>+</StyledButton>
          </Lanesli>
        ))}
      </LanesUl>
    );
  }
}

export default Lanes;
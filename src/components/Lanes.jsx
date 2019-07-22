import React, { Component } from 'react';
import styled from '@emotion/styled';
import Block from './Block';
import Editable from './Editable';
import Blocks from './Blocks';

const StyledButton = styled.button`
  // float: left;
`;

const StyledList = styled.ul`
  list-style-type: none;
  white-space:nowrap;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  
`;

const StyLI = styled.li`
  display: block;
  float: left;
  border: 2px solid purple;
`;

const Stli = styled.li`
  display: flex;
`;

class Lanes extends Component {
  render() {
    const { lanes, editBlock = () => { }, addBlock = () => { }, activateBlock = () => { }, deleteBlock = ()=> {} } = this.props;
    return (
      <StyledUl>
        {lanes.map(({ lid, lname, blocks, laneEdit }) => (
          <Stli key={lid}>
            <StyledList>
              <Block onClick={activateBlock.bind(null, [lid, 0])}>
                <Editable Name={lname} editBlock={editBlock.bind(null, [lid, 0])} isEditing={laneEdit} head={true}/>
              </Block>
              <Blocks laneId={lid} blocks={blocks} activateBlock={activateBlock} editBlock={editBlock} deleteBlock={deleteBlock} head={false} />
            </StyledList>
            <StyledButton className='add-block' onClick={addBlock.bind(null, lid)}>+</StyledButton>
          </Stli>
        ))}
      </StyledUl>
    );
  }
}

export default Lanes;
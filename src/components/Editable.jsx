import React from 'react';
import styled from '@emotion/styled'

const Rectangle = styled.div`
  width:${props => (props.width > 1 ? 1 + props.width * 0.10 : 1) * 100}px;
  height:100px;
  display: flex;
  background:${props => props.color};
`;

const Perimeter = styled.div`
  display: flex;
`;

const Division = styled.div`
  display: flex;
  margin-left: 5%;
  margin-right: -10%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width:${props => props.width}%;
`;

const StyledButton = styled.button`
  height: 20px;
  width: 20px;
  font-size: 8pt;
  font-family: tahoma;
  position: absolute;
`;

const Editable = ({ isEditing, Name, Width, Color, editBlock, head, deleteBlock }) => {
  if (!isEditing)
    return <Editable.Show width={Width} color={Color} name={Name} head={head} deleteBlock={deleteBlock} />
  return <Editable.Edit width={Width} color={Color} name={Name} editBlock={editBlock} />
};

const Show = ({ color, name, width, head, deleteBlock }) => {
  return (
    <Rectangle width={width} color={color} name={name}>
      <Division>
        <h3>Name</h3> {name}
      </Division>
      {head === true ? '' : <StyledButton onClick={deleteBlock}>x</StyledButton>}
    </Rectangle>
  );
};

Editable.Show = Show;
class Edit extends React.Component {
  render() {
    const { color, name, width } = this.props;
    return (
      <Rectangle width={width} color={color} name={name}>
        <Division>
          <Perimeter>
            <Input type='text' className='Name' placeholder='Name' width='40' autoFocus={true} defaultValue={name} onKeyPress={this.checkEnter} />
            <Input type='text' className='Color' placeholder='Color' width='40' autoFocus={true} defaultValue={color} onKeyPress={this.checkEnter} />
          </Perimeter>
          <Input type='text' className='Width' placeholder='Width' width='40' autoFocus={true} defaultValue={width} onKeyPress={this.checkEnter} />
        </Division>
      </Rectangle>
    );
  }


  checkEnter = (e) => {
    if (e.key === "Enter") {
      this.finishEdit(e);
    }
  }

  finishEdit = (e) => {
    const value = e.target.value;
    const typo = e.target.className;
    if (this.props.editBlock) {
      this.props.editBlock([value, typo]);
    }
  }
}

Editable.Edit = Edit;
export default Editable;
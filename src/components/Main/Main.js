import React, { Component } from 'react';
import Lanes from '../Lanes';
import styled from '@emotion/styled';
import uuid from 'uuid';
import Save from '../Save';
import Load from '../Load';

const StyledButton = styled.button`
  display: inline;
  float: left;
`;

class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      lanes:[
        {
          lid:uuid.v4(),
          lname:null,
          bid: 0,
          laneEdit: false,
          blocks: [
            {
              bid: uuid.v4(),
              bname: 'null',
              width: 1,
              color: 'red',
              type: null,
              isEditing: false,
            }
          ]
        }
      ],
    }
  }

  componentDidMount() {
    let state = JSON.parse(window.localStorage.getItem('DataFill-State'));
    if(state)
      this.setState(state);
  }

  componentDidUpdate() {
    window.localStorage.setItem('DataFill-State', JSON.stringify(this.state));
  }


  render() {
    const { lanes } = this.state;
    return (
      <div>  
      <span>
        <button className='add-lane' onClick={this.addLane}>New Lane</button>
        <Lanes lanes={lanes} activateBlock={this.activateBlock} addBlock={this.addBlock} editBlock={this.editBlock} deleteBlock={this.deleteBlock}/>
        {/* <Blocks blocks={blocks} activateBlock={this.activateBlock} editBlock={this.editBlock} deleteBlock={this.deleteBlock}/> */}
        {/* <StyledButton className='add-block' onClick={this.addBlock}>+</StyledButton> */}
      </span>
      <div>
        <Save info={this.state}/>
        <Load loadData={this.loadData}/>
      </div>
      </div>
    );
  }

  loadData = (e) => {
    let loadedState = e.split('$')[1];
    this.setState(JSON.parse(loadedState));
  }

  addBlock = (lid,e) => {
    e.stopPropagation();
    this.setState(
      {
        lanes: this.state.lanes.map(lane => {
          console.log(lane.lid);
          if(lid!==undefined && lane.lid === lid){
            lane.blocks = lane.blocks.concat({
              bid: uuid.v4(),
              bname: 'null',
              width: 1,
              color: 'red',
              type: null,
              isEditing: false,
            })
          }
          return lane;
        })
      }
    )
  }

  addLane=() => {
    this.setState(
      {
        lanes: this.state.lanes.concat({
          lid: uuid.v4(),
          lname: 'Add lines',
          bid: 0,
          laneEdit: false,
          blocks: [{
            bid: uuid.v4(),
            bname: 'null',
            width: 1,
            color: 'red',
            type: null,
            isEditing: false,
          },]
        })
      }
    )
  }

  activateBlock = (id) => {
    this.setState({
      lanes: this.state.lanes.map(lane => {
        let lid = id[0];
        let bid = id[1];
        if(lane.lid === lid){
          lane.blocks.map(block => {
            if(block.bid ===bid && bid !== 0){
              block.isEditing = true;
            }else{
              if(bid === 0){
                lane.laneEdit = true;
              }
            }
            return block;
          })
        }
        return lane;
      })
    })
  }

  editBlock = (id, value) => {
    this.setState({
      lanes: this.state.lanes.map(lane => {
        let lid = id[0];
        let bid = id[1];
        if (lane.lid === lid){
          lane.blocks.map(block => {
            if(block.bid === bid && bid !== 0){
              let attr = value[1].split(" ")[0];
              switch (attr) {
                case 'Color': block.color = value[0]; break;
                case 'Name': block.bname = value[0]; break;
                case 'Width': block.width = value[0]; break;
                default: block.color = value[0]; break;
              }    
              block.isEditing = false;
            } else if(bid === 0){
              let attr = value[1].split(" ")[0];
              switch (attr) {
                // case 'Color': block.color = value[0]; break;
                case 'Name': lane.lname = value[0]; break;
                // case 'Width': block.width = value[0]; break;
                default: break;
              }
              lane.laneEdit = false;
            }
            return block;
          })
        }
        return lane;
      })
    })
  }

  deleteBlock = (id) => {
    let lid = id[0];
    let bid = id[1];
    this.setState({
      lanes:this.state.lanes.map(lane => {
        if(lane.lid === lid){
          lane.blocks = lane.blocks.filter(block => block.bid !== bid);
        }
      })
    })
  }
}

export default Main;
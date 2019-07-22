import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
 float:left;
  margin-right:-999em;
`;

function App() {
  return (
    <StyledDiv className="App">
     <Main />
    </StyledDiv>
  );
}

export default App;

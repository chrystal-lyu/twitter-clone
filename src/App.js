import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import SideBar from './components/SideBar';

const Wrapper = styled.div `
  box-sizing: border-box;
  font-style: Roboto,Ubuntu,"Helvetica Neue",sans-serif;
  background-color: rgb(21, 32, 43);
  color: rgb(255, 255, 255);
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`

function App() {
  return (
    <Wrapper>
      <Header/>
      <Main/>
      <SideBar/>
    </Wrapper>
  );
}

export default App;

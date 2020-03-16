import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

import Header from './components/Header';
import Main from './components/Main';
import SideBar from './components/SideBar';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    overscroll-behavior: none;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
const Wrapper = styled.div `
  font-style: Roboto,Ubuntu,"Helvetica Neue",sans-serif;
  background-color: rgb(21, 32, 43);
  color: rgb(255, 255, 255);
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

function App() {
  return (
    <Wrapper>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <SideBar/>
    </Wrapper>
  );
}

export default App;

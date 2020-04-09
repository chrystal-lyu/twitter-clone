import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import SideBar from './components/SideBar';
import Explore from './components/Explore';
import Profile from './components/Profile';
import NotFound from './components/NotFound';

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

class App extends React.Component {  
  render() {
    return (
      <Router>
        <Wrapper>
          <GlobalStyle/>
          <Header/>
          <Switch>
            <Route
              exact 
              path="/" 
              component={Main}
            />
            <Route 
              path="/explore" 
              component={Explore}
            />
            <Route 
              path="/search" 
              component={Explore}
            />
            <Route 
              path="/profile" 
              component={Profile}
            />
            <Route 
              component={NotFound} 
            />
          </Switch>
          <SideBar/>
        </Wrapper>
      </Router>
    )
  }
}

export default App;
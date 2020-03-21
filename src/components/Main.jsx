import React from 'react';
import styled from 'styled-components';
import FeedList from './FeedList';

const Wrapper = styled.div `
  border-right: 1px solid rgb(56, 68, 77);
  border-left: 1px solid rgb(56, 68, 77);
  width: 600px;
`
const Home = styled.div`
  border-bottom: 1px solid rgb(56, 68, 77);
  padding: 15px;
  font-size: 19px;
  font-weight: 800;
  position: sticky;
  top: 0;
  background-color: #15202A;
`
const Divider = styled.div`
  height: 10px;
  background-color: rgb(37, 51, 65);
`

const Main = ({
  timeline
}) => {
  return (
    <Wrapper>
      <Home>Home</Home>
      <Divider/>
      <FeedList data={timeline}/>
    </Wrapper>
  );
};
export default Main;
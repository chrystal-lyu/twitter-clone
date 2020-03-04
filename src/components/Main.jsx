import React from 'react';
import styled from 'styled-components';

import WriteBox from './WriteBox';
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
`
const Divider = styled.div`
  height: 10px;
  background-color: rgb(37, 51, 65);
`

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTweet: '',
      list: []
    }
    this.changeValue = this.changeValue.bind(this);
    this.addTweet = this.addTweet.bind(this);
  }

  changeValue (e) {
    const { value } = e.target;
    this.setState({ newTweet: value });
  }

  addTweet () {
    const newTweet = {
      id: 1 + Math.random(),
      value: this.state.newTweet
    }
    const newList = [...this.state.list];
    newList.push(newTweet);
    this.setState({ list: newList });
  }

  render () {
    return (
      <Wrapper>
        <Home>Home</Home>
        <WriteBox 
          value = {this.state.newTweet}
          handleChangeValue = {this.changeValue} 
          handleAddTweet = {this.addTweet}
        />
        <Divider/>
        <FeedList data={this.state.list}/>
      </Wrapper>
    );
  }
}

export default Main;
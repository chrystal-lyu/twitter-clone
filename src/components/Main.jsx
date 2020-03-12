import React from 'react';
import styled from 'styled-components';

import WriteBox from './WriteBox';
import FeedList from './FeedList';

import json from '../twitter.json'

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

  componentDidMount () {
    fetch('/tweets')
    .then(res => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      this.setState({
        list: data
      });
    })
  }

  changeValue (e) {
    const { value } = e.target;
    this.setState({ newTweet: value });
  }

  addTweet () {
    const newTweet = {
      id: 1 + Math.random(),
      text: this.state.newTweet,
      user: {
        screen_name: 'Naomi Scott',
        handle: 'naomiscott',
        profile_image_url: 'https://randomuser.me/api/portraits/men/57.jpg'
      }
    }
    const newList = [...this.state.list];
    newList.push(newTweet);
    this.setState({ 
      list: newList,
      newTweet: ''
    });
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
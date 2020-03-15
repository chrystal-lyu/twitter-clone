import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  position: sticky;
  top: 0;
  background-color: #15202A;
  z-index: 1;
`
const Divider = styled.div`
  height: 10px;
  background-color: rgb(37, 51, 65);
`

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      list: []
    }
    this.changeValue = this.changeValue.bind(this);
    this.searchTweet = this.searchTweet.bind(this);
  }

  componentDidMount () {
    fetch('/tweets')
    .then(res => {
      return res.json()
    })
    .then((data) => {
      this.setState({
        list: data
      });
    })
  }

  changeValue (e) {
    const { value } = e.target;
    this.setState({ searchValue: value });
  }

  searchTweet () {
    const search_query = this.state.searchValue;
    axios.get('/searchtweet', { params: {search_query: search_query} })
    .then(res => {
      this.setState({
        list: res.data,
        searchValue: ''
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render () {
    return (
      <Wrapper>
        <Home>Home</Home>
        <WriteBox 
          value = {this.state.searchValue}
          handleChangeValue = {this.changeValue} 
          searchTweet = {this.searchTweet}
        />
        <Divider/>
        <FeedList data={this.state.list}/>
      </Wrapper>
    );
  }
}

export default Main;
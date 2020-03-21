import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'; 

import FeedItem from './FeedItem';

const Wrapper = styled.div `
  border-right: 1px solid rgb(56, 68, 77);
  border-left: 1px solid rgb(56, 68, 77);
  width: 600px;
`

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
`
const SearchBoxContainer = styled.div`
  background-color: #15202A;
  padding: 6px 0;
  width: 560px;
  margin: 0 auto;
`
const SearchBox = styled.input`
  padding: 10px 15px;
  background: rgb(37,51,65);
  color: white;
  height: 20px;
  width: 530px;
  font-size: 16px;
  border: none;
  border-radius: 99px;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px white;
  }

  ::placeholder {
    color: rgb(136, 153, 166);
    opacity: 1;
  }
`
const SearchResult = styled.div`  
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`
const Message = styled.div`
  font-size: 18px;
  line-height: 30px;
  padding: 0 20px;
  margin-top: 20px;
  text-align: ${props => props.centered ? 'center': ''};
`
class Explore extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchResult = this.fetchResult.bind(this);

    this.state = {
      searchValue: '',
      searchResult: []
    }
  }
  fetchResult() {
    const { searchValue } = this.state;
    const query = searchValue;
    axios.get('/search', { params: { search_query: query } })
    .then(res => {
      this.setState({ searchResult: res.data })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  componentDidMount () {
    let search = new URLSearchParams(this.props.location.search);
    let name = search.get("search_query");
    if (name && name.length > 1) {
      this.setState ({
        searchValue: name
      }, () => {
        this.fetchResult()
      })
    }   
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ 
      searchValue: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { searchValue } = this.state;
    const { history } = this.props;
    this.props.passSearchQuery(searchValue);

    history.push({
      pathname: '/search',
      search: '?search_query=' + searchValue
    })
    this.setState ({
      searchValue: searchValue
    }, () => {
      this.fetchResult()
    })
  }

  render () {
    const { searchValue } = this.state;
    const { timeline } = this.props;

    return (
      <Wrapper>
        <SearchWrapper>
          <SearchBoxContainer>
            <form onSubmit={this.handleSubmit}>
              <SearchBox
                name = 'text'
                type = 'text'
                placeholder = 'Search'
                value = {searchValue}
                onChange = {this.handleChange}
              />
            </form>
          </SearchBoxContainer>
          {
            timeline.length > 0 ?
              <SearchResult>
                <ul>
                  {timeline.map((item) => {
                    return (
                      <FeedItem
                        key={item.id}
                        body={item.text}
                        entities={item.entities}
                        avatarImg={item.user.profile_image_url}
                        name={item.user.name}
                        handle={item.user.screen_name}
                        time={item.created_at}
                        favCount={item.favorite_count}
                        rtCount={item.retweet_count}
                      />
                    )
                  })}
                </ul>
              </SearchResult> :
              <Message centered>Try searching for "coronavirus"</Message>
          }
        </SearchWrapper>
      </Wrapper>
    )
  }
}

export default withRouter(Explore);
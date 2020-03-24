import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResult } from '../redux/actions/operations'
import styled from 'styled-components';

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
  padding: 6px 20px;
  width: 560px;
  position: sticky;
  top: 0;
  z-index: 1;
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

    this.state = {
      searchValue: '',
      searchResult: []
    }
  }

  componentDidMount () {
    let search = new URLSearchParams(this.props.location.search);
    let name = search.get("search_query");
    if (name && name.length > 1) {
      this.setState ({
        searchValue: name
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
    window.scrollTo(0, 0);
    const { searchValue } = this.state;
    const { history, dispatch } = this.props;
    dispatch(fetchSearchResult(searchValue));
    history.push({
      pathname: '/search',
      search: '?search_query=' + searchValue
    })
    this.setState ({
      searchValue: searchValue
    })
  }

  render () {
    const { searchValue } = this.state;
    const { searchResult } = this.props;
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
            searchResult.length > 0 ?
              <SearchResult>
                <ul>
                  {searchResult.map((item) => {
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

const mapStateToProps = state => ({
  searchResult: state.timelineReducer.searchResult
});

export default connect(mapStateToProps)(withRouter(Explore));

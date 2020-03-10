import React from 'react';
import styled from 'styled-components';

import sentences from '../sentences.json'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SearchBox = styled.input`
  margin: 15px 0 15px 15px;
  padding: 10px 15px;
  background: rgb(37,51,65);
  color: white;
  height: 30px;
  width: auto;
  font-size: 16px;
  border: none;
  border-radius: 99px;

  &:focus {
    outline: none;
  }
`
const SearchResult = styled.div`
  background-color: #182734;
  border-radius: 15px; 
  padding: 0 15px;
  margin-left: 15px;
  
  ul {
    padding: 0;
    list-style-type: none;

    li {
      margin-top: 10px;
    }
  }
`

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchValue: '',
      searchResult: []
    }
  }

  componentDidMount() {
    this.setState({
      searchResult: sentences
    })
  }

  handleChange (e) {
    const target = e.target.value;
    let filteredResult = [];
    filteredResult = sentences.filter((item) => {
      let text = item.data.toLowerCase();
      return text.indexOf(target.toLowerCase()) > -1;
    })
    this.setState({
      searchValue: target,
      searchResult: filteredResult
    })
  }

  render() {
    const { searchValue, searchResult} = this.state;
    return (
      <Wrapper>
        <SearchBox
          name = 'text'
          type = 'text'
          placeholder = 'Search Twitter'
          value = {searchValue}
          onChange = {this.handleChange}
        />
        <SearchResult>
          <ul>
            {searchResult.map((item) => {
              return (
                <li key={item.id}>{item.data}</li>
              )
            })}
          </ul>
        </SearchResult>
      </Wrapper>
    )
  }
}

export default Search;
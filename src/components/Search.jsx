import React from 'react';
import styled from 'styled-components';

import sentences from '../sentences.json'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SearchBoxContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #15202A;
  height: 53px;
`
const SearchBox = styled.input`
  margin: 5px 0 5px 15px;
  padding: 10px 15px;
  background: rgb(37,51,65);
  color: white;
  height: 20px;
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
  margin-top: 10px;
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
        <SearchBoxContainer>
          <SearchBox
            name = 'text'
            type = 'text'
            placeholder = 'Search Twitter'
            value = {searchValue}
            onChange = {this.handleChange}
          />
        </SearchBoxContainer>
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
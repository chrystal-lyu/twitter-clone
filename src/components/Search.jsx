import React from 'react';
import styled from 'styled-components';

import sentences from '../sentences.json'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SearchBox = styled.input`
  margin: 15px;
  padding: 10px;
  background: rgb(37,51,65);
  color: white;
  height: 30px;
  width: 80%;
  font-size: 16px;
  border: none;

  &:focus {
    outline: none;
  }
`
const SearchResult = styled.div`
  border-top: 1px solid rgb(56,68,77);
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
          placeholder = 'What are you looking for?'
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
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SearchBoxContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #15202A;
  padding: 10px 0 10px 40px;
`
const SearchBox = styled.input`
  padding: 10px 15px;
  background: rgb(37,51,65);
  color: white;
  height: 20px;
  width: 280px;
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
  background-color: #182734;
  border-radius: 15px; 
  padding: 0 15px;
  margin-top: 10px;
  margin-left: 40px;
  
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
    this.state = {
      searchValue: '',
      searchResult: []
    }
  }

  render() {
    const { searchResult } = this.state;
    return (
      <Wrapper>
        <SearchBoxContainer>
          <SearchBox
            name = 'text'
            type = 'text'
            placeholder = 'Search'
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
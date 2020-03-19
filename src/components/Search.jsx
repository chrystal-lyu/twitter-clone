import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
`
const SearchBoxContainer = styled.div`
  background-color: #15202A;
  padding: 6px 0 6px 40px;
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
    const { location } = this.props;
    const { searchResult } = this.state;
    if (location.pathname.match('/explore')) {
      return null
    }
    return (
      <Wrapper>
        <SearchBoxContainer>
          <SearchBox
            name = 'text'
            type = 'text'
            placeholder = 'Search'
          />
        </SearchBoxContainer>
        {
          searchResult.length > 0 ?
            <SearchResult>
              <ul>
                {searchResult.map((item) => {
                  return (
                    <li key={item.id}>{item.data}</li>
                  )
                })}
              </ul>
            </SearchResult> :
            null
        }
      </Wrapper>
    )
  }
}

export default withRouter(Search);
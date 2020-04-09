import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResult } from '../redux/actions/operations'
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

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      searchValue: ''
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

  render() {
    const { location } = this.props;
    const { searchValue } = this.state;
    if (location.pathname.match('/explore') || location.pathname.match('/search')) {
      return null
    }
    return (
      <Wrapper>
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
      </Wrapper>
    )
  }
}

export default connect()(withRouter(Search));
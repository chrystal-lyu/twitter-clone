import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import Trend from './Trend';

const Wrapper = styled.div `
  /* border: 1px solid lightblue; */
  width: 350px;
`

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trends: []
    }
  }
  componentDidMount () {
    fetch('/trends')
    .then(res => {
      return res.json()
    })
    .then((data) => {
      this.setState({
        trends: data
      })
    })
  }
  render () {
    const { trends } = this.state;
    return (
      <Wrapper>
        <Search/>
        <Trend trends={trends}/>
      </Wrapper>
    );
  }
}

export default SideBar;
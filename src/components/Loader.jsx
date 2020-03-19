import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid rgb(29,161,242);
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

class Loader extends React.Component {
  render() {
    return (
      <Element/>
    )
  }
}

export default Loader;
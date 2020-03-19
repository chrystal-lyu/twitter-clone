import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
  border: 5px solid rgba(29,161,242,.1);
  border-radius: 50%;
  border-top: 5px solid rgb(29,161,242);
  width: 15px;
  height: 15px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
const defaultProps = {
  children: null
}

const Loader = ({children, isLoading}) => {
  if (isLoading) {
    return <Element/>
  }
  return children
}

Loader.defaultProps = defaultProps;

export default Loader;
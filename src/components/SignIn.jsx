import React from 'react';
import styled from 'styled-components';
import { ReactComponent as TwitterIcon } from '../assets/logo.svg'

const Wrapper = styled.form `
  display: flex;
  justify-content: center;

  button {  
    background-color: rgb(29, 161, 242);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    transition: all .2s;

    &:hover {
      background-color: rgba(29, 161, 242, .7);
      color: rgba(255,255,255,.7);
    }
  }
`
const Icon = styled(TwitterIcon)`
  fill: white;
  transition: all .2s;
  padding-right:5px;

  ${Wrapper}:hover & {
    fill: rgba(255,255,255,.7);
  }
`

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { error: null }
  }
  onSubmit = e => {
    e.preventDefault();
  }
  render () {
    const { error } = this.state;
    return (
      <Wrapper onSubmit={this.onSubmit}>
        <button type="submit"><Icon/><span>Sign in with Twitter</span></button>
        {error && <p>{error.message}</p>}
      </Wrapper>
    )
  }
}

export default SignIn;
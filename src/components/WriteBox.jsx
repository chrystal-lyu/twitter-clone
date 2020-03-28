import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getAuthenticationStatus } from '../firebase';
import SignIn from './SignIn';

const Wrapper = styled.div`
  padding: 15px;

  section {
    width: 200px;
    margin: 0 auto;
  }
`
const Compose = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: papayawhip;
`
const InputBox = styled.input`
  width: 505px;
  margin-left: 15px;
  border: none;
  background-color: transparent;
  transition: 0.3s all;
  outline: none;
  padding: 10px 0;
  font-size: 18px;
  color: white;
`
const Button = styled.button`
  color: white;
  font-size: 16px;
  font-weight: 600;
  width: 90px;
  padding: 10px;
  margin: 15px 0 0 auto;
  border: none;
  border-radius: 99px;
  display: flex;
  font-size: 14px;
  justify-content: center;
  cursor: pointer;
  background-color: rgb(29, 161, 242);
  transition: all .2s;

  &:hover {
    background-color: rgba(29, 161, 242, .7);
    color: rgba(255,255,255,.7);
  }

  &:focus {
    outline: 0;
  }
  &:disabled{
    opacity: 0.5;
    cursor: auto;
  }
`
const Message = styled.div`
  font-size: 20px;
  font-weight: 800;
  width: fit-content;
  margin: 0 auto 15px auto;
`

class WriteBox extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputValue: ''
    }
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState ({
      inputValue: value
    })
  }

  render () {
    const { inputValue } = this.state;
    if (getAuthenticationStatus()) {
      return (
        <Wrapper>
          <Compose>
            <Avatar/>
            <InputBox
              placeholder = "What's happening?"
              type = "text"
              value = {inputValue}
              onChange = {this.handleChange}
            />
          </Compose>
          <Button
           role="button"
           disabled = {inputValue.length > 0 ? false : true}
          >Tweet</Button>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Message>Sign in to tweet</Message>
          <section><SignIn withIcon /></section>
        </Wrapper>
      )
    }
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(WriteBox);
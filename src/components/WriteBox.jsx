import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 15px;
`
const Compose = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-color: papayawhip;
`
const InputBox = styled.textarea`
  width: 80%;
  border-color: transparent;
  background-color: transparent;
  transition: 0.3s all;
  outline: none;
  padding: 20px;
  font-size: 18px;
  color: white;
`
const Button = styled.button`
  color: white;
  font-size: 16px;
  font-weight: 600;
  width: 65px;
  padding: 10px;
  margin: 10px 0 0 auto;
  border: none;
  border-radius: 99px;
  display: flex;
  justify-content: center;

  background-color: ${props => props.theme.main};
`
Button.defaultProps = {
  theme: {
    main: "rgb(29, 161, 242)"
  } 
}

class WriteBox extends React.Component {
  render () {
    return (
      <Wrapper>
        <Compose>
          <Avatar/>
          <InputBox
            placeholder = "What's happening?"
            type = "text"
            value = {this.props.value}
            onChange = {this.props.handleChangeValue}
          />
        </Compose>
        <Button
         role="button"
         onClick= {this.props.handleAddTweet}
        >Tweet</Button>
      </Wrapper>
    );
  }
}

export default WriteBox;
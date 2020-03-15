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
const InputBox = styled.input`
  width: 100%;
  border-color: transparent;
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
  margin: 10px 0 0 auto;
  border: none;
  border-radius: 99px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.theme.main};

  &:focus {
    outline: 0;
  }
  &:disabled{
    opacity: 0.5;
    cursor: auto;
  }

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
          <InputBox
            placeholder = "Search twitter"
            type = "text"
            value = {this.props.value}
            onChange = {this.props.handleChangeValue}
          />
        </Compose>
        <Button
         role="button"
         onClick= {this.props.searchTweet}
         disabled = {this.props.value.length > 0 ? false : true}
        >Search</Button>
      </Wrapper>
    );
  }
}

export default WriteBox;
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { startLogout } from '../redux/actions/operations'

const Wrapper = styled.form `
  button {  
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(29, 161, 242);
    border-radius: 99px;
    width: 100%;
    padding: 15px;
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

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { error: null }
  }
  onSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(startLogout());
  }

  render () {
    const { error } = this.state;
    return (
      <Wrapper onSubmit={this.onSubmit}>
        <button type="submit"><span>Sign out</span></button>
        {error && <p>{error.message}</p>}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(SignIn);
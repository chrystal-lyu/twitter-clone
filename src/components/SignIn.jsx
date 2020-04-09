import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { startLogin, fetchHomeTimeline, fetchProfileTimeline } from '../redux/actions/operations'
import { ReactComponent as TwitterIcon } from '../assets/logo.svg'

const Wrapper = styled.form `
  display: flex;
  justify-content: center;

  button {  
    width: 100%;
    background-color: rgb(29, 161, 242);
    border-radius: 99px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
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

    span {
      padding: 15px 0;
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
    const { dispatch } = this.props;
    
    async function fetchHome () {
      try {
        await dispatch(startLogin());
        dispatch(fetchHomeTimeline());
        dispatch(fetchProfileTimeline());
      } catch(error) {
        console.log(error)
      }
    }
    fetchHome();
  }
  
  render () {
    const { error } = this.state;
    const { withIcon } = this.props
    return (
      <Wrapper onSubmit={this.onSubmit}>
        {
          withIcon ? 
          <button type="submit">
            <Icon/><span>Sign in with Twitter</span>
          </button> :
          <button type="submit">
            <span>Sign in with Twitter</span>
          </button>
        }
        {error && <p>{error.message}</p>}
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(SignIn);
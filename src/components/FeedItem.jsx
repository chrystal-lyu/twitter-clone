import React from 'react';
import styled from 'styled-components';

const UserAvatar = (props) => {
  return (
    <img alt='avatar' src={props.src}/>
  )
}

const UserName = (props) => {
  return (
    <div>{props.name || ''}</div>
  )
}

const UserHandle = (props) => {
  return (
    <div><a href='/'>@{props.handle || ''}</a></div>
  )
}

const TweetBody = (props) => {
  return (
    <div>{props.body || ''}</div>
  )
}

const TimeStamp = () => {
  return (
    <div>{new Date().toLocaleDateString()} {new Date().toTimeString()}</div>
  )
}

class FeedItem extends React.Component {
  render () {
    return (
    <li>
      <UserAvatar src={this.props.avatarImg}/>
      <UserName name={this.props.name}/>
      <UserHandle handle={this.props.handle}/>
      <TweetBody body={this.props.body}/>
      <TimeStamp/>
    </li>
    )
  }
}

export default FeedItem;
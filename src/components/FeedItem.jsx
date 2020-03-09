import React from 'react';
import styled from 'styled-components';

const UserAvatar = () => {
  return (
    <img alt='avatar' src='https://randomuser.me/api/portraits/women/64.jpg'/>
  )
}

const UserName = () => {
  return (
    <div>My Name</div>
  )
}

const UserHandle = () => {
  return (
    <div><a href='/'>@myhandle</a></div>
  )
}

const TweetBody = (props) => {
  return (
    <div>{props.body}</div>
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
      <UserAvatar/>
      <UserName/>
      <UserHandle/>
      <TweetBody body={this.props.value}/>
      <TimeStamp/>
    </li>
    )
  }
}

export default FeedItem;
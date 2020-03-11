import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 0 0 15px 15px;
  border-bottom: 1px solid rgb(56, 68, 77);
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
`
const Head = styled.div`
  display: flex;
  flex-direction: row;
`
const Avatar = styled.img`
  border-radius: 100px;
  margin-right: 15px;
`
const Name = styled.div`
  font-weight: 800;
`
const Handle = styled.div`
  margin-left: 5px;

  a {
    color: rgb(136, 153, 166);
    text-decoration: none;
  }
`
const Dot = styled.span`
  color: rgb(136, 153, 166);
  padding: 0 5px;
`
const Time = styled.div`
  color: rgb(136, 153, 166);
  font-size: 15px;
`

const UserAvatar = (props) => {
  return (
    <Avatar alt='avatar' width='50px;' src={props.src}/>
  )
}

const UserName = (props) => {
  return (
    <Name>{props.name}</Name>
  )
}

const UserHandle = (props) => {
  return (
    <Handle><a href='/'>@{props.handle}</a></Handle>
  )
}

const TweetBody = (props) => {
  return (
    <div>{props.body}</div>
  )
}

const TimeStamp = () => {
  return (
    <Time>{new Date().toLocaleDateString()}</Time>
  )
}

class FeedItem extends React.Component {
  render () {
    return (
    <Wrapper>
      <UserAvatar src={this.props.avatarImg}/>
      <Text>
        <Head>
          <UserName name={this.props.name}/>
          <UserHandle handle={this.props.handle}/>
          <Dot>·</Dot>
          <TimeStamp/>
        </Head>
        <TweetBody body={this.props.body}/>
      </Text>
    </Wrapper>
    )
  }
}

export default FeedItem;
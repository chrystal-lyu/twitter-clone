import React from 'react';
import styled from 'styled-components';

import FeedAction from './FeedAction'

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  padding: 15px 0 2px 15px;
  border-bottom: 1px solid rgb(56, 68, 77);
  transition: background-color .2s;
  transition: all .2s;
  cursor: pointer;

  &:hover {
    background-color: #182734;
  }
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-left:15px;

  span:hover {
    text-decoration: underline;
  }
`
const Head = styled.div`
  display: flex;
  flex-direction: row;
`
const AvatarContainer = styled.div`
  width:50px;
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
const TweetMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgb(56,68,77);
  height: 360px;
  margin-top: 10px;

  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
  }
`
const Url = styled.a`
  color: rgb(29,161,242);
  text-decoration: none;
`

const UserAvatar = (props) => {
  return (
    <AvatarContainer>
      <Avatar alt='avatar' width='50px' height='50px' src={props.src}/>
    </AvatarContainer>
  )
}

const UserName = (props) => {
  return <Name>{props.name}</Name>
}

const UserHandle = (props) => {
  return <Handle><a href='/'>@{props.handle}</a></Handle>
}

const TweetBody = (props) => {
  const rule = /([#|＃|@][^\s]+)/g;
  let newBody = props.body.split(rule).map((chunk, index) => {
      if (chunk.match(rule)) {
          return (
            <span key={index} style={{
              'color': 'rgb(29,161,242)'
            }}>{chunk}</span>
          )
      }
      return chunk;
  });
  return (
    <div>
      {newBody}
      {props.renderFeedUrl}
      {props.renderMedia}
    </div>
  )
}

const TimeStamp = (props) => {
  return <Time>{props.time.substring(0,11)}</Time>
}

const EntityUrl = (props) => {
  return (
    <div>{props.urls.map((item, i) => {
      return (<Url href={item.url} key={i}>{item.url}</Url>)
    })}</div>
  )
}

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderFeedUrl = this.renderFeedUrl.bind(this);
  }

  renderFeedUrl () {
    if (this.props.entities.urls.length > 0) {
      return <EntityUrl  urls={this.props.entities.urls}/>
    }
  }

  renderMedia() {
    if (this.props.entities.media) {
      return (
        <TweetMediaContainer>
          <img alt="" src={this.props.entities.media[0].media_url}/>
        </TweetMediaContainer>
      )
    }
  }

  render () {
    const { 
      avatarImg, 
      name, 
      handle, 
      time, 
      body, 
      favCount, 
      rtCount } = this.props;
    return (
      <Wrapper>
        <UserAvatar src={avatarImg}/>
        <Text>
          <Head>
            <UserName name={name}/>
            <UserHandle handle={handle}/>
            <Dot>·</Dot>
            <TimeStamp time={time}/>
          </Head>
          <TweetBody
            body={body} 
            renderFeedUrl={this.renderFeedUrl()}
            renderMedia={this.renderMedia()}
          />
          <FeedAction 
            favCount={favCount}
            rtCount={rtCount}
          />
        </Text>
      </Wrapper>
    )
  }
}

export default FeedItem;